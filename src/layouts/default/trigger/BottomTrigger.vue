<template>
  <div :class="[prefixCls, { collapsed }]" @click="onClick">
    <Icon icon="ant-design:double-right-outlined" v-if="collapsed" />
    <Icon icon="ant-design:double-left-outlined" v-else />
  </div>
</template>
<script setup lang="ts">
  import { computed, useCssVars } from 'vue';
  import { getNaiveCssVars } from '/@/hooks/core/useNaiveInternal';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { propTypes } from '/@/utils/propTypes';

  defineProps({
    collapsed: propTypes.bool.def(false),
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  });

  const {
    siderToggleButtonColor: bg_color,
    siderToggleButtonIconColor: icon_color,
    siderToggleButtonBorder: border,
  } = getNaiveCssVars('Layout');
  const {
    siderToggleBarColor: dark_bg_color,
    siderToggleButtonIconColor: dark_icon_color,
    siderToggleButtonBorder: dark_border,
  } = getNaiveCssVars('Layout', true);

  const { getIsDarkMode } = useRootSetting();

  const getVars = computed(() => {
    const isDark = getIsDarkMode.value;
    return {
      bgColor: isDark ? dark_bg_color : bg_color,
      iconColor: isDark ? dark_icon_color : icon_color,
      border: isDark ? dark_border : border,
    };
  });

  useCssVars(() => {
    const obj = getVars.value;
    return {
      'toggle-button-color': obj.bgColor,
      'toggle-button-icon-color': obj.iconColor,
      'toggle-button-border': obj.border,
    };
  });
  const { prefixCls } = useDesign('layout-toggle-bottom');
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-layout-toggle-bottom';

  .@{prefix-cls} {
    transition: color var(--app-transition-duration) var(--app-bezier),
      right var(--app-transition-duration) var(--app-bezier),
      left var(--app-transition-duration) var(--app-bezier),
      border-color var(--app-transition-duration) var(--app-bezier),
      background-color var(--app-transition-duration) var(--app-bezier);
    z-index: 100;
    cursor: pointer;
    width: 100%;
    height: 36px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: var(--toggle-button-icon-color);
    border-top: var(--toggle-button-border);
    border-right: var(--toggle-button-border);
    background-color: var(--toggle-button-color);
    .icon {
      transition: transform var(--app-transition-duration) var(--app-bezier);
      transform: rotate(180deg);
    }
    &.collapsed .icon {
      transform: rotate(0);
    }
  }
</style>
