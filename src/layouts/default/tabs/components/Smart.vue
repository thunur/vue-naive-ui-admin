<template>
  <div
    :class="[prefixCls, isActive ? `${prefixCls}__active text-light-100` : '']"
    class="dark:text-light-100"
  >
    <span :class="`${prefixCls}__smart__slot`">
      <slot></slot>
    </span>
    <div class="smart__icon">
      <div class="icon">
        <Icon icon="ei:close" @click="handleClose" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDesign } from '@/hooks/web/useDesign';

  interface Emits {
    /** 点击关闭图标 */
    (e: 'close'): void;
  }
  defineProps({
    isActive: { type: Boolean, default: false },
  });
  // const [darkModeRef] = useChangeTheme();

  const emit = defineEmits<Emits>();
  const { prefixCls } = useDesign('multiple-tabs');
  function handleClose(e: MouseEvent) {
    e.stopPropagation();
    emit('close');
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-multiple-tabs';
  .@{prefix-cls} {
    display: inline-flex;
    padding: 0 25px;
    margin-right: -18px;
    line-height: 38px;
    height: 38px;
    text-align: center;
    border: 0;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
    & > .smart__icon {
      vertical-align: middle;
      overflow: hidden;
      width: 0px;
      transition: all var(--app-transition-duration) var(--app-bezier);
      margin-left: 10px;
      border-radius: 50%;
    }
    &__active {
      z-index: 10;
      background-color: #0000;
      border-bottom: 1px solid #0000;
      -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      mask-size: 100% 100%;
      -webkit-mask-size: 100% 100%;
      background-color: var(--app-primary-color);
      &:hover {
        background-color: var(--app-primary-color) !important;
        color: #fcfcfc !important;
      }
      & > .smart__icon {
        width: 14px;
      }
    }
    &:hover {
      padding: 0 25px;
      background: #dee1e6;
      -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      color: #000000;
      & > .smart__icon {
        width: 14px;
      }
    }
  }
</style>
