<template>
  <BasicModal
    @register="register"
    title="Modal Title"
    :tipsMessage="['提示1', '提示2']"
    :okButtonProps="{ disabled: true }"
  >
    <n-button type="primary" @click="closeModal" class="mr-2"> 从内部关闭弹窗 </n-button>
    <n-button type="primary" @click="setModalProps"> 从内部修改title </n-button>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useModalInner } from '/@/components/Modal';
  export default defineComponent({
    setup() {
      const [register, { closeModal, setModalProps }] = useModalInner();
      return {
        register,
        closeModal,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
