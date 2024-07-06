<template>
  <SvgIcon
    :size="size"
    :name="getSvgIcon"
    v-if="isSvgIcon"
    :class="[prefixCls, $attrs.class, 'anticon']"
    :spin="spin"
  />
  <Iconify
    v-else
    :icon="getIconRef"
    :class="[prefixCls, getClass, 'anticon']"
    :size="size"
    :color="color"
    :depth="depth"
  />
</template>

<script lang="ts">
  import SvgIcon from './SvgIcon.vue';
  import { Icon as Iconify } from '@iconify/vue';
  import type { Depth } from 'naive-ui/lib/icon/src/Icon';
  import { defineComponent, computed } from 'vue';
  import { propTypes } from '@/utils/propTypes';
  import { useDesign } from '@/hooks/web/useDesign';

  const SVG_END_WITH_FLAG = '|svg';
  export default defineComponent({
    name: 'Icon',
    components: { SvgIcon, Iconify },
    props: {
      size: propTypes.stringNumber,
      spin: propTypes.bool,
      color: propTypes.string,
      depth: [String, Number] as PropType<Depth>,
      icon: propTypes.string,
      prefix: propTypes.string,
      useTranstion: propTypes.bool,
    },
    setup(props) {
      const { prefixCls } = useDesign('svg-icon');
      const isSvgIcon = computed(() => props.icon?.endsWith(SVG_END_WITH_FLAG));
      const getSvgIcon = computed(() => props.icon.replace(SVG_END_WITH_FLAG, ''));
      const getIconRef = computed(() => `${props.prefix ? props.prefix + ':' : ''}${props.icon}`);
      const getClass = computed(() => {
        return {
          'animate-spin animate-duration-2000': props.spin,
          'transition-all n-ease-in-out': props.useTranstion,
        };
      });
      return {
        prefixCls,
        isSvgIcon,
        getSvgIcon,
        getIconRef,
        getClass,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-svg-icon';

  .@{prefix-cls} {
    display: inline-block;
    overflow: hidden;
    vertical-align: -0.2em;
    fill: currentColor;
  }

  .svg-icon-spin {
    animation: spin 1s infinite linear;
  }
</style>
