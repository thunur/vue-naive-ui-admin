<template>
  <div :class="[prefixCls, isActive ? 'active' : '']" class="mr-10px">
    <span :class="`${prefixCls}-tab__preffix`">
      <slot></slot>
    </span>
    <!-- 如果是固定页不允许关闭 -->
    <div v-if="closable" :class="`${prefixCls}-tab__icon pl-5px`">
      <Icon icon="ei:close" @click="handleClose" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  interface Emits {
    /** 点击关闭图标 */
    (e: 'close'): void;
  }
  defineProps({
    closable: { type: Boolean },
    isActive: { type: Boolean, defualt: false },
  });
  const emit = defineEmits<Emits>();
  const { prefixCls } = useDesign('multiple-tabs__button');

  function handleClose(e: MouseEvent) {
    e.stopPropagation();
    emit('close');
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-multiple-tabs__button';
  .@{prefix-cls} {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 3px 6px;
    border-width: 1px;
    border-radius: 2px;
    cursor: pointer;
    transition: all var(--app-transition-duration) var(--app-bezier);
    border: 1px solid var(--app-border-color);
    color: var(--app-text-color);
    &.active,
    &:hover {
      border-color: var(--app-primary-color);
      background-color: var(--app-primary-color);
      color: var(--app-body-color);
      .@{prefix-cls}-tab__icon {
        width: 24px;
      }
    }
    &-tab__icon {
      width: 0px;
      overflow: hidden;
      margin-top: -2px;
      font-size: 16px;
      transition: width var(--app-transition-duration) var(--app-bezier);
      position: relative;
    }
  }
</style>
