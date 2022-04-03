<template>
  <div :class="prefixCls" :style="getWrapperStyle">
    <div
      class="text-[#333639] dark:bg-[#18181c] dark:text-opacity-82 transition-all duration-300 ease-in-out flex items-center w-full"
    >
      <div class="flex-1 overflow-hidden h-full">
        <div ref="tabsElRef" class="h-full flex items-center" :class="`${prefixCls}__content`">
          <div class="pr-16px"></div>
          <ScrollContainer :isTabs="true">
            <Draggable
              :list="panels"
              animation="300"
              item-key="key"
              class="flex"
              @end="draggableEnd"
            >
              <template #item="{ element }">
                <component
                  :isTabs="true"
                  :is="activeComponent"
                  :key="element.path"
                  :is-active="activeKeyRef === element.path"
                  :closable="!element?.meta?.affix"
                  :data-name="element.path"
                  @click="handleTabChange(element.path)"
                  @close="handleClose(element.path)"
                >
                  <TabContent :tab-item="element" />
                </component>
              </template>
            </Draggable>
          </ScrollContainer>
        </div>
      </div>
      <div class="flex h-full">
        <TabRedo />
        <TabContent is-extra :tab-item="$route" />
        <FoldButton />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, computed, nextTick, watch, defineComponent, unref, toRaw } from 'vue';
  import { MaybeElementRef, unrefElement, useEventListener } from '@vueuse/core';
  import Smart from './components/Smart.vue';
  import Button from './components/Button.vue';
  import { useMultipleTabStore } from '/@/store/modules/multipleTab';
  import { listenerRouteChange } from '/@/logics/mitt/routeChange';
  import { useMultipleTabSetting } from '/@/hooks/setting/useMultipleTabSetting';
  import { REDIRECT_NAME } from '/@/router/constant';
  import { RouteLocationNormalized, RouteMeta, useRouter } from 'vue-router';
  // import { initAffixTabs, useTabsDrag } from './useMultipleTabs';
  import { useGo } from '/@/hooks/web/usePage';
  import TabContent from './components/TabContent.vue';
  import TabRedo from './components/TabRedo.vue';
  import FoldButton from './components/FoldButton.vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { createLocalStorage } from '/@/utils/cache';
  import { MULTIPLE_TABS_KEY } from '/@/enums/cacheEnum';
  import { getNaiveCssVarsRef } from '/@/hooks/core/useNaiveInternal';
  import Draggable from 'vuedraggable/src/vuedraggable';

  export default defineComponent({
    name: 'MultipleTabs',
    components: { TabContent, TabRedo, FoldButton, Draggable },
    setup() {
      // const affixTextList = initAffixTabs();

      // useTabsDrag(affixTextList);
      // tabs vuex
      const tabStore = useMultipleTabStore();
      const { getTabsStyle } = useMultipleTabSetting();
      const { prefixCls } = useDesign('multiple-tabs');
      const router = useRouter();
      const tabsElRef: MaybeElementRef = ref();
      const activeKeyRef = ref<string>();
      const go = useGo();
      // 同步缓存tabs到vuex
      tabStore.asyncTabs();
      const ls = createLocalStorage();

      const getTabsState = computed(() => {
        return tabStore.getTabList.filter((item) => !item.meta?.hideTab);
      });

      const tabStyle = computed(() => getTabsStyle.value === 'button');
      const activeComponent = computed(() => (tabStyle.value ? Button : Smart));

      const getWrapperStyle = computed((): any => {
        const tabsBgColor = getNaiveCssVarsRef('Tabs', 'tabColor')!;
        return {
          '--app-tabs-bg-color': tabsBgColor.value,
        };
      });

      // 监听route改变
      listenerRouteChange((route) => {
        const { name } = route;
        if (name === REDIRECT_NAME || !route) {
          return;
        }

        const { path, fullPath, meta = {} } = route;
        const { currentActiveMenu, hideTab } = meta as RouteMeta;
        const isHide = !hideTab ? null : currentActiveMenu;
        const p = isHide || fullPath || path;
        if (activeKeyRef.value !== p) {
          activeKeyRef.value = p as string;
        }

        if (isHide) {
          const findParentRoute = router
            .getRoutes()
            .find((item) => item.path === currentActiveMenu);

          findParentRoute && tabStore.addTab(findParentRoute as unknown as RouteLocationNormalized);
        } else {
          tabStore.addTab(unref(route));
        }
      });

      // 选项卡点击事件
      const handleTabChange = (activeKey: string) => {
        activeKeyRef.value = activeKey;
        go(activeKey, false);
      };
      watch(
        () => activeKeyRef.value,
        (val) => {
          nextTick(() => {
            if (!val) return;
            const tabElItem = unrefElement(tabsElRef)?.querySelector(`[data-name="${val}"]`);
            if (!tabElItem) return;
            setTimeout(() => {
              tabElItem.scrollIntoView({
                behavior: 'smooth',
                inline: 'start',
              });
            }, 600);
          });
        },
        {
          immediate: true,
        }
      );

      const handleClose = (key: string) => {
        tabStore.closeTabByKey(key, router);
      };

      // 离开页面缓存当前打开的tabs
      useEventListener(window, 'beforeunload', () => {
        ls.set(MULTIPLE_TABS_KEY, unref(getTabsState));
      });

      // 拖拽tabs排序
      function draggableEnd() {
        const newTabs = toRaw(unref(getTabsState));
        tabStore.setTabs(newTabs);
      }
      return {
        tabsElRef,
        prefixCls,
        activeKeyRef,
        activeComponent,
        panels: getTabsState,
        handleTabChange,
        handleClose,
        getWrapperStyle,
        draggableEnd,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-multiple-tabs';
  .@{prefix-cls} {
    grid-area: multipletab;
    overflow-x: hidden;
    transition: background-color var(--app-transition-duration) var(--app-bezier),
      border-color var(--app-transition-duration) var(--app-bezier);
    border-bottom: 1px solid var(--n-border-color);

    & .scrollbar__view {
      white-space: nowrap;
    }
    .scrollbar {
      .scrollbar__bar {
        display: none;
      }
    }
    &-content {
      &__extra-quick,
      &__extra-redo,
      &__extra-fold {
        width: 36px;
        line-height: @multiple-height;
        text-align: center;
        cursor: pointer;
        padding: 10px;
      }
    }
  }
</style>
