<template>
  <span :class="getClass">
    <slot></slot>
    <BasicTips :class="`${prefixCls}-tips`" v-if="tipsMessage" :text="tipsMessage" />
  </span>
</template>
<script lang="ts" setup>
  import type { PropType } from 'vue';
  import { useSlots, computed } from 'vue';
  import BasicTips from './BasicTips.vue';
  import { useDesign } from '@/hooks/web/useDesign';

  const props = defineProps({
    /**
     * tips text list or string
     * @default: ''
     */
    tipsMessage: {
      type: [String, Array] as PropType<string | string[]>,
      default: '',
    },
    /**
     * Whether the color block on the left side of the title
     * @default: false
     */
    span: { type: Boolean },
    /**
     * Whether to default the text, that is, not bold
     * @default: false
     */
    normal: { type: Boolean },
  });

  const { prefixCls } = useDesign('basic-title');
  const slots = useSlots();
  const getClass = computed(() => [
    prefixCls,
    { [`${prefixCls}-show-span`]: props.span && slots.default },
    { [`${prefixCls}-normal`]: props.normal },
  ]);
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-basic-title';

  .@{prefix-cls} {
    position: relative;
    display: flex;
    padding-left: 7px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: var(--app-text-color);
    cursor: pointer;
    user-select: none;

    &-normal {
      font-size: 14px;
      font-weight: 500;
    }

    &-show-span::before {
      position: absolute;
      top: 4px;
      left: 0;
      width: 3px;
      height: 16px;
      margin-right: 4px;
      background-color: var(--app-primary-color);
      content: '';
    }

    &-tips {
      margin-left: 10px;
    }
  }
</style>
