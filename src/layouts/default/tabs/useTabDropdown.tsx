import type { DropdownOption } from 'naive-ui';
import type { TabContentProps } from './types';
import type { ComputedRef } from 'vue';
import { MenuEventEnum } from './types';

import { computed, unref, reactive } from 'vue';
import { and, not } from '@vueuse/core';
import { useMultipleTabStore } from '/@/store/modules/multipleTab';
import { RouteLocationNormalized, useRouter } from 'vue-router';
import { useTabs } from '/@/hooks/web/useTabs';
import { useI18n } from '/@/hooks/web/useI18n';
import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
import { Icon } from '/@/components/Icon';

export function useTabDropdown(tabContentProps: TabContentProps, getIsTabs: ComputedRef<boolean>) {
  const state = reactive({
    current: null as Nullable<RouteLocationNormalized>,
    currentIndex: 0,
  });

  const { t } = useI18n();
  const tabStore = useMultipleTabStore();
  const { currentRoute } = useRouter();
  const { refreshPage, closeAll, close, closeLeft, closeOther, closeRight } = useTabs();

  const getTargetTab = computed((): RouteLocationNormalized => {
    return unref(getIsTabs) ? tabContentProps.tabItem : unref(currentRoute);
  });

  const { getShowMenu, setMenuSetting } = useMenuSetting();
  const { getShowHeader, setHeaderSetting } = useHeaderSetting();

  const getIsUnFold = and(not(getShowMenu), not(getShowHeader));

  function handleFold() {
    const isUnFold = getIsUnFold.value;
    setMenuSetting({
      show: isUnFold,
      hidden: !isUnFold,
    });
    setHeaderSetting({ show: isUnFold });
  }

  /**
   * @description: drop-down list
   */
  const getDropMenuList = computed(() => {
    if (!unref(getTargetTab)) {
      return;
    }
    const { meta } = unref(getTargetTab);
    const { path } = unref(currentRoute);

    const curItem = state.current;

    const isCurItem = curItem ? curItem.path === path : false;

    // Refresh button
    const index = state.currentIndex;
    const refreshDisabled = !isCurItem;
    // Close left
    const closeLeftDisabled = index === 0 || !isCurItem;

    const disabled = tabStore.getTabList.length === 1;

    // Close right
    const closeRightDisabled =
      !isCurItem || (index === tabStore.getTabList.length - 1 && tabStore.getLastDragEndIndex >= 0);

			const dropMenuList: DropdownOption[] = [
				{
					key: MenuEventEnum.TOGGLE_FULL_SCREEN,
					label: t('layout.multipleTab.toggleFullScreen'),
					icon: () =>
						getIsUnFold.value ? (
							<Icon icon="radix-icons:exit-full-screen" />
						) : (
							<Icon icon="radix-icons:enter-full-screen" />
						),
				},
				{
					icon: () => <Icon icon="codicon:refresh" />,
					key: MenuEventEnum.REFRESH_PAGE,
					label: t('layout.multipleTab.reload'),
					disabled: refreshDisabled,
				},
				{
					icon: () => <Icon icon="clarity:close-line" />,
					key: MenuEventEnum.CLOSE_CURRENT,
					label: t('layout.multipleTab.close'),
					disabled: !!meta?.affix || disabled,
				},
				{
					type: 'divider',
					key: 'd2',
				},
				{
					key: MenuEventEnum.CLOSE_LEFT,
					label: t('layout.multipleTab.closeLeft'),
					disabled: closeLeftDisabled,
					icon: () => <Icon icon="line-md:arrow-close-left" />,
				},
				{
					key: MenuEventEnum.CLOSE_RIGHT,
					label: t('layout.multipleTab.closeRight'),
					disabled: closeRightDisabled,
					icon: () => <Icon icon="line-md:arrow-close-right" />,
				},
				{
					type: 'divider',
					key: 'd3',
				},
				{
					key: MenuEventEnum.CLOSE_OTHER,
					label: t('layout.multipleTab.closeOther'),
					disabled: disabled || !isCurItem,
					icon: () => <Icon icon="dashicons-align-center" />,
				},
				{
					key: MenuEventEnum.CLOSE_ALL,
					label: t('layout.multipleTab.closeAll'),
					disabled,
					icon: () => <Icon icon="clarity-minus-line" />,
				},
			];

    // return getIsTabs.value ? dropMenuList : dropMenuList.slice(2);
		return dropMenuList;
  });

  function handleContextMenu(tabItem: RouteLocationNormalized) {
    return (e: Event) => {
      if (!tabItem) {
        return;
      }
      e?.preventDefault();
      const index = tabStore.getTabList.findIndex((tab) => tab.path === tabItem.path);
      state.current = tabItem;
      state.currentIndex = index;
    };
  }

  // Handle right click event
  function handleMenuEvent(event: MenuEventEnum): void {
    switch (event) {
      case MenuEventEnum.REFRESH_PAGE:
        // refresh page
        refreshPage();
        break;
      case MenuEventEnum.TOGGLE_FULL_SCREEN:
        handleFold();
        break;
      // Close current
      case MenuEventEnum.CLOSE_CURRENT:
        close(tabContentProps.tabItem);
        break;
      // Close left
      case MenuEventEnum.CLOSE_LEFT:
        closeLeft();
        break;
      // Close right
      case MenuEventEnum.CLOSE_RIGHT:
        closeRight();
        break;
      // Close other
      case MenuEventEnum.CLOSE_OTHER:
        closeOther();
        break;
      // Close all
      case MenuEventEnum.CLOSE_ALL:
        closeAll();
        break;
    }
  }
  return { getDropMenuList, handleMenuEvent, handleContextMenu };
}
