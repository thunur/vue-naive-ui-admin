<template>
  <div :class="getClass">
    <template v-if="canFullscreen">
      <n-tooltip placement="bottom" v-if="fullScreen">
        <template #trigger>
          <span>
            <Icon
              icon="ant-design:fullscreen-exit-outlined"
              role="full"
              @click="handleFullScreen"
            />
          </span>
        </template>
        {{ t('component.modal.restore') }}
      </n-tooltip>
      <n-tooltip placement="bottom" v-else>
        <template #trigger>
          <span>
            <Icon
              class="text-18px"
              icon="ant-design:fullscreen-outlined"
              role="full"
              @click="handleFullScreen"
            />
          </span>
        </template>
        {{ t('component.modal.maximize') }}
      </n-tooltip>
    </template>
    <n-tooltip placement="bottom">
      <template #trigger>
        <span>
          <Icon
            class="text-18px"
            icon="ant-design:close-outlined"
            role="close"
            @click="handleCancel"
          />
        </span>
      </template>
      {{ t('component.modal.close') }}
    </n-tooltip>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useDesign } from '@/hooks/web/useDesign';
  import { useI18n } from '@/hooks/web/useI18n';

  export default defineComponent({
    name: 'ModalClose',
    props: {
      canFullscreen: { type: Boolean, default: true },
      fullScreen: { type: Boolean },
    },
    emits: ['cancel', 'fullscreen'],
    setup(props, { emit }) {
      const { prefixCls } = useDesign('basic-modal-close');
      const { t } = useI18n();

      const getClass = computed(() => {
        return [
          prefixCls,
          `${prefixCls}--custom`,
          {
            [`${prefixCls}--can-full`]: props.canFullscreen,
          },
        ];
      });

      function handleCancel(e: Event) {
        emit('cancel', e);
      }

      function handleFullScreen(e: Event) {
        e?.stopPropagation();
        e?.preventDefault();
        emit('fullscreen');
      }

      return {
        t,
        getClass,
        prefixCls,
        handleCancel,
        handleFullScreen,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-basic-modal-close';
  .@{prefix-cls} {
    display: flex;
    height: 95%;
    align-items: center;
    color: var(--n-close-color);
    > span {
      cursor: pointer;
      &:hover {
        color: var(--app-primary-color-hover);
      }
    }
    > span:nth-child(1) {
      padding: 10px;
    }
  }
</style>
