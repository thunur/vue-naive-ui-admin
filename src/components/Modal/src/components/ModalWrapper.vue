<template>
  <ScrollContainer ref="wrapperRef">
    <div ref="spinRef" :style="spinStyle" v-loading="loading" :loading-tip="loadingTip">
      <slot></slot>
    </div>
  </ScrollContainer>
</template>
<script lang="ts">
  import type { CSSProperties } from 'vue';
  import {
    defineComponent,
    computed,
    ref,
    watchEffect,
    unref,
    watch,
    onMounted,
    nextTick,
    onUnmounted,
  } from 'vue';
  import { useWindowSizeFn } from '/@/hooks/event/useWindowSizeFn';
  import { ScrollContainer } from '/@/components/Container';
  import { createModalContext } from '../hooks/useModalContext';
  import { useMutationObserver } from '@vueuse/core';

  const props = {
    loading: { type: Boolean },
    useWrapper: { type: Boolean, default: true },
    modalHeaderHeight: { type: Number, default: 57 },
    modalFooterHeight: { type: Number, default: 74 },
    minHeight: { type: Number, default: 200 },
    height: { type: Number },
    footerOffset: { type: Number, default: 0 },
    show: { type: Boolean },
    fullScreen: { type: Boolean },
    loadingTip: { type: String },
  };

  export default defineComponent({
    name: 'ModalWrapper',
    components: { ScrollContainer },
    inheritAttrs: false,
    props,
    emits: ['height-change', 'ext-height'],
    setup(props, { emit }) {
      const wrapperRef = ref<ComponentRef>(null);
      const spinRef = ref<ElRef>(null);
      const realHeightRef = ref(0);
      const minRealHeightRef = ref(0);

      let realHeight = 0;

      let stopElResizeFn: Fn = () => {};

      useWindowSizeFn(setModalHeight.bind(null, false));

      useMutationObserver(
        spinRef,
        () => {
          setModalHeight();
        },
        {
          attributes: true,
          subtree: true,
        }
      );

      createModalContext({
        redoModalHeight: setModalHeight,
      });

      // 内容区自动高度
      const spinStyle = computed((): CSSProperties => {
        return {
          minHeight: `${props.minHeight}px`,
          [props.fullScreen ? 'height' : 'maxHeight']: `${unref(realHeightRef)}px`,
        };
      });

      watchEffect(() => {
        props.useWrapper && setModalHeight();
      });

      watch(
        () => props.fullScreen,
        (v) => {
          setModalHeight();
          if (!v) {
            realHeightRef.value = minRealHeightRef.value;
          } else {
            minRealHeightRef.value = realHeightRef.value;
          }
        }
      );

      onMounted(() => {
        const { modalHeaderHeight, modalFooterHeight } = props;
        emit('ext-height', modalHeaderHeight + modalFooterHeight);
      });

      onUnmounted(() => {
        stopElResizeFn && stopElResizeFn();
      });

      async function setModalHeight() {
        // 解决在弹窗关闭的时候监听还存在,导致再次打开弹窗没有高度
        // 加上这个,就必须在使用的时候传递父级的show
        if (!props.show) return;

        try {
          let maxHeight =
            window.innerHeight -
            100 -
            (props.footerOffset! || 0) -
            props.modalFooterHeight -
            props.modalHeaderHeight;
          await nextTick();
          const spinEl = unref(spinRef);

          if (!spinEl) return;
          await nextTick();
          // if (!realHeight) {
          realHeight = spinEl.scrollHeight;
          // }

          if (props.fullScreen) {
            realHeightRef.value =
              window.innerHeight - props.modalFooterHeight - props.modalHeaderHeight - 28;
          } else {
            realHeightRef.value = props.height
              ? props.height
              : realHeight > maxHeight
              ? maxHeight
              : realHeight;
          }
          emit('height-change', unref(realHeightRef));
        } catch (error) {
          console.log(error);
        }
      }

      return { wrapperRef, spinRef, spinStyle, setModalHeight };
    },
  });
</script>
