<template>
  <div
    ref="wrapperEl"
    class="flex items-center duration-300 ease-in-out cursor-pointer"
    :style="getWrapperStyle"
    @click="goHome"
  >
    <SvgIcon name="logo" :class="[`${prefixCls}`]" :size="logoSize" :style="getLogoStyle" />
    <div
      ref="titleEl"
      v-if="showTitle"
      class="text-$app-primary-color dark:text-white font-segoe transition-colors duration-300 ease-in-out ml-3 font-semibold"
      :class="[`${prefixCls}__title`]"
      :style="getTitleStyle"
    >
      {{ getTitle }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, CSSProperties, ref, unref, watch } from 'vue';
  import { useRafFn, useEventListener, unrefElement, Pausable } from '@vueuse/core';
  import { clamp } from 'lodash-es';
  import { layoutSiderCollapsedWidth } from '@/settings/designSetting';
  import { formatLength } from 'naive-ui/lib/_utils';
  import { useDesign } from '@/hooks/web/useDesign';
  import { useMenuSetting } from '@/hooks/setting/useMenuSetting';
  import { useGlobSetting } from '@/hooks/setting';
  import { useGo } from '@/hooks/web/usePage';
  import { useAppInject } from '@/hooks/web/useAppInject';
  import { PageEnum } from '@/enums/pageEnum';
  import { useUserStore } from '@/store/modules/user';
  import { propTypes } from '@/utils/propTypes';
  import { useRootSetting } from '@/hooks/setting/useRootSetting';

  const props = defineProps({
    logoSize: propTypes.stringNumber.def(32),
    showTitle: propTypes.bool.def(true),
    titleSize: propTypes.stringNumber.def(18),
    titleColor: propTypes.string,
    collapsed: propTypes.bool,
    collapsedShowTitle: propTypes.bool.def(false),
    isStatic: propTypes.bool.def(false),
    width: propTypes.stringNumber,
  });

  const { prefixCls } = useDesign('app-logo');
  const userStore = useUserStore();
  const { title } = useGlobSetting();
  const { getMenuWidth, getMenuRootIndent, getCollapsed } = useMenuSetting();
  const { getIsMobile } = useAppInject();

  const { getIsDarkMode } = useRootSetting();
  const { getMenuInverted } = useMenuSetting();

  const wrapperEl = ref<HTMLDivElement>();
  const titleEl = ref<HTMLDivElement>();
  const clip = ref(`inset(0px ${props.collapsed ? 100 : 0}% 0px 0px)`);

  watch([wrapperEl, titleEl, () => props.showTitle], () => {
    handleListener();
  });

  function handleListener() {
    const wEl = unrefElement(wrapperEl) as HTMLDivElement;
    const tEl = unrefElement(titleEl) as HTMLDivElement;
    if (!wEl || !tEl || !props.showTitle) return;
    const fn = clacClipPath(wEl, tEl);
    fn();
    let control: Pausable;
    useEventListener(wEl, 'transitionstart', () => {
      if (control) {
        control.resume();
        return;
      }
      control = useRafFn(fn);
    });
    useEventListener(wEl, 'transitionend', () => {
      if (!control) return;
      control.pause();
    });
  }

  function clacClipPath(...els: HTMLDivElement[]) {
    return () => {
      const [wEl, tEl] = els;
      const ww = wEl.offsetWidth;
      const tw = tEl.offsetWidth;
      const tl = tEl.offsetLeft;
      const pr = 16;
      const res = tw - ww + tl + pr;
      clip.value = `inset(0px ${res < 0 ? 0 : Math.min(res, tw + 1)}px 0px 0px)`;
    };
  }

  const go = useGo();

  const getWrapperStyle = computed((): CSSProperties => {
    const { collapsed, collapsedShowTitle, isStatic, width } = props;
    return {
      ...(!isStatic
        ? {
            paddingLeft: collapsed ? '7px' : `${getMenuRootIndent.value - 4}px`,
            width:
              (collapsed ?? getCollapsed.value) && !collapsedShowTitle
                ? formatLength(layoutSiderCollapsedWidth)
                : formatLength(
                    width ?? getIsMobile.value
                      ? `${clamp(100, getMenuWidth.value, 240)}px`
                      : getMenuWidth.value
                  ),
          }
        : {}),
    };
  });

  const getLogoStyle = computed((): CSSProperties => {
    return {
      fontSize: formatLength(props.logoSize),
      transition: 'all var(--app-transition-duration) var(--app-bezier)',
      minWidth: formatLength(props.logoSize),
      zIndex: 10,
    };
  });

  // logo线条颜色
  const getLogoColor = computed(() => {
    return unref(getIsDarkMode) || unref(getMenuInverted) ? 'white' : 'black';
  });

  // logo 方块颜色
  const getLogoDotColor = computed(() => {
    return unref(getIsDarkMode) || unref(getMenuInverted) ? 'var(--app-primary-color)' : '#b8292d';
  });

  const getTitleStyle = computed((): CSSProperties => {
    const { titleSize, titleColor } = props;
    return {
      fontSize: formatLength(titleSize),
      lineHeight: 1.3,
      ...(props.isStatic ? {} : { clipPath: clip.value }),
      ...(titleColor ? { color: titleColor } : {}),
    };
  });

  const titleWidth = computed(() => (props.collapsed ? 0 : '100%'));

  const getTitle = computed(() => title);

  function goHome() {
    go(userStore.getUserInfo.homePath || PageEnum.BASE_HOME);
  }
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    &__title {
      @supports (background-clip: text) or (-webkit-background-clip: text) {
        white-space: nowrap;
        background-clip: text;
        -webkit-background-clip: text;
        background-color: currentColor;
      }
      @supports not (-webkit-background-clip: text) {
        transition-property: width;
        width: v-bind(titleWidth);
      }
    }
  }
  #icon-logo {
    & path {
      fill: v-bind(getLogoColor) !important;
      &:last-child {
        fill: v-bind(getLogoDotColor) !important;
      }
    }
  }
</style>
