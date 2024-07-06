<template>
  <BasicModal
    v-bind="$attrs"
    destroyOnClose
    @register="register"
    title="Modal Title"
    :tipsMessage="['提示1', '提示2']"
    @show-change="handleShow"
    @ok="handleOk"
  >
    <template #insertFooter>
      <n-button type="primary" danger @click="setLines" :disabled="loading">点我更新内容</n-button>
    </template>
    <template v-if="loading">
      <div class="empty-tips">加载中，稍等3秒……</div>
    </template>
    <template v-if="!loading">
      <ul>
        <li v-for="index in lines" :key="index">加载完成{{ index }}！</li>
      </ul>
    </template>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { useModalInner } from '@/components/Modal';
  export default defineComponent({
    setup() {
      const loading = ref(true);
      const lines = ref(10);
      const [register, { setModalProps, redoModalHeight, closeModal }] = useModalInner();

      watch(
        () => lines.value,
        () => {
          redoModalHeight();
        }
      );

      function handleShow(visible: boolean) {
        if (visible) {
          loading.value = true;
          setModalProps({ loading: true, confirmLoading: true });
          setTimeout(() => {
            lines.value = Math.round(Math.random() * 30 + 5);
            loading.value = false;
            setModalProps({ loading: false, confirmLoading: false });
          }, 3000);
        }
      }

      function handleOk() {
        closeModal();
        console.log('ok');
      }

      function setLines() {
        lines.value = Math.round(Math.random() * 20 + 10);
      }
      return { register, loading, handleShow, lines, setLines, handleOk };
    },
  });
</script>
<style scoped>
  .empty-tips {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
</style>
