<template>
  <Modal v-bind="getBindValue" @cancel="handleCancel" :class="prefixCls" v-model:show="showRef">
    <n-card
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      :class="[prefixCls, getBindValue.wrapClassName]"
      :style="{ width: getProps.width }"
    >
      <template #header>
        <div class="w-full">
          <ModalHeader
            :title="getMergeProps.title"
            :tipsMessage="getProps.tipsMessage"
            @dblclick="handleTitleDbClick"
          />
        </div>
      </template>
      <template #header-extra>
        <ModalClose
          :canFullscreen="getProps.canFullscreen"
          :fullScreen="fullScreenRef"
          @cancel="handleCancel"
          @fullscreen="handleFullScreen"
        />
      </template>

      <template #action v-if="!$slots.action">
        <ModalFooter v-bind="getBindValue" @ok="handleOk" @cancel="handleCancel">
          <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
        </ModalFooter>
      </template>

      <ModalWrapper
        :useWrapper="getProps.useWrapper"
        :footerOffset="wrapperFooterOffset"
        :fullScreen="fullScreenRef"
        ref="modalWrapperRef"
        :loading="getProps.loading"
        :loading-tip="getProps.loadingTip"
        :minHeight="getProps.minHeight"
        :height="getWrapperHeight"
        :show="showRef"
        v-bind="omit(getProps.wrapperProps, 'show', 'height', 'modalFooterHeight')"
        @ext-height="handleExtHeight"
        @height-change="handleHeightChange"
      >
        <slot></slot>
      </ModalWrapper>

      <template #[item]="data" v-for="item in Object.keys(omit($slots, 'default'))">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </n-card>
  </Modal>
</template>
<script lang="ts">
  import type { ModalProps, ModalMethods } from './typing';

  import {
    defineComponent,
    computed,
    ref,
    watch,
    unref,
    watchEffect,
    toRef,
    getCurrentInstance,
    nextTick,
  } from 'vue';
  import Modal from './components/Modal';
  import ModalWrapper from './components/ModalWrapper.vue';
  import ModalClose from './components/ModalClose.vue';
  import ModalFooter from './components/ModalFooter.vue';
  import ModalHeader from './components/ModalHeader.vue';
  import { isFunction } from '@/utils/is';
  import { deepMerge } from '@/utils';
  import { basicProps } from './props';
  import { useFullScreen } from './hooks/useModalFullScreen';
  import { omit } from 'lodash-es';
  import { useDesign } from '@/hooks/web/useDesign';

  export default defineComponent({
    name: 'BasicModal',
    components: { Modal, ModalWrapper, ModalClose, ModalFooter, ModalHeader },
    inheritAttrs: false,
    props: basicProps,
    emits: ['show-change', 'height-change', 'cancel', 'ok', 'register', 'update:show'],
    setup(props, { emit, attrs }) {
      console.log(props);
      const showRef = ref(false);
      const propsRef = ref<Partial<ModalProps> | null>(null);
      const modalWrapperRef = ref<any>(null);
      const { prefixCls } = useDesign('basic-modal');

      // modal   Bottom and top height
      const extHeightRef = ref(0);
      const modalMethods: ModalMethods = {
        setModalProps,
        emitShow: undefined,
        redoModalHeight: () => {
          nextTick(() => {
            if (unref(modalWrapperRef)) {
              (unref(modalWrapperRef) as any).setModalHeight();
            }
          });
        },
      };

      const instance = getCurrentInstance();
      if (instance) {
        emit('register', modalMethods, instance.uid);
      }

      // Custom title component: get title
      const getMergeProps = computed((): Recordable => {
        return {
          ...props,
          ...(unref(propsRef) as any),
        };
      });

      // 全屏相关
      const { handleFullScreen, getWrapClassName, fullScreenRef } = useFullScreen({
        modalWrapperRef,
        extHeightRef,
        wrapClassName: toRef(getMergeProps.value, 'wrapClassName'),
      });

      // modal component does not need title and origin buttons
      const getProps = computed((): Recordable => {
        const opt = {
          ...unref(getMergeProps),
          show: unref(showRef),
          okButtonProps: undefined,
          cancelButtonProps: undefined,
          title: undefined,
        };
        return {
          ...opt,
          wrapClassName: unref(getWrapClassName),
        };
      });

      const getBindValue = computed((): Recordable => {
        const attr = {
          ...attrs,
          ...unref(getMergeProps),
          show: unref(showRef),
          wrapClassName: unref(getWrapClassName),
        };
        if (unref(fullScreenRef)) {
          return omit(attr, ['height', 'title']);
        }
        return omit(attr, 'title');
      });

      const getWrapperHeight = computed(() => {
        if (unref(fullScreenRef)) return undefined;
        return unref(getProps).height;
      });

      watchEffect(() => {
        showRef.value = !!props.show;
        fullScreenRef.value = !!props.defaultFullscreen;
      });

      watch(
        () => unref(showRef),
        (v) => {
          emit('show-change', v);
          emit('update:show', v);
          instance && modalMethods.emitShow?.(v, instance.uid);
        },
        {
          immediate: false,
        }
      );

      // 取消事件
      async function handleCancel(e: Event) {
        e?.stopPropagation();
        // 过滤自定义关闭按钮的空白区域
        if ((e.target as HTMLElement)?.classList?.contains(prefixCls + '-close--custom')) return;
        if (props.closeFunc && isFunction(props.closeFunc)) {
          const isClose: boolean = await props.closeFunc();
          showRef.value = !isClose;
          return;
        }

        showRef.value = false;
        emit('cancel', e);
      }

      /**
       * @description: 设置modal参数
       */
      function setModalProps(props: Partial<ModalProps>): void {
        // Keep the last setModalProps
        propsRef.value = deepMerge(unref(propsRef) || ({} as any), props);
        if (Reflect.has(props, 'show')) {
          showRef.value = !!props.show;
        }
        if (Reflect.has(props, 'defaultFullscreen')) {
          fullScreenRef.value = !!props.defaultFullscreen;
        }
      }

      // 提交事件
      function handleOk(e: Event) {
        emit('ok', e);
      }

      // 高度改变
      function handleHeightChange(height: string) {
        emit('height-change', height);
      }

      // 控制内容区高度，放置出现额外的滚动条
      function handleExtHeight(height: number) {
        extHeightRef.value = height;
      }

      function handleTitleDbClick(e) {
        if (!props.canFullscreen) return;
        handleFullScreen(e);
      }

      return {
        prefixCls,
        handleCancel,
        getBindValue,
        getProps,
        handleFullScreen,
        fullScreenRef,
        getMergeProps,
        handleOk,
        showRef,
        omit,
        modalWrapperRef,
        handleExtHeight,
        handleHeightChange,
        handleTitleDbClick,
        getWrapperHeight,
      };
    },
  });
</script>
