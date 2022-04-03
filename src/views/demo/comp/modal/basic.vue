<template>
  <PageWrapper
    title="modal组件使用示例"
    content="使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable 参数进行控制是否可以拖动，双击标题可最大化切换"
  >
    <n-card>
      <n-button @click="openModalLoading">尝试一下</n-button>
    </n-card>
    <component :is="currentModal" v-model:show="modalShow" :userData="userData" />
    <NAlert message="自适应高度" show-icon />
    <n-button type="primary" class="my-4" @click="openTargetModal(3)"> 打开弹窗 </n-button>
    <Modal1 @register="register1" :minHeight="100" />
    <Modal2 @register="register2" />
    <Modal3 @register="register3" />
    <Modal4 @register="register4" />
  </PageWrapper>
</template>

<script lang="ts">
  // import { promiseTimeout } from '@vueuse/core';
  import { useModal } from '/@/components/Modal';
  import Modal1 from './Modal1.vue';
  import Modal2 from './Modal2.vue';
  import Modal3 from './Modal3.vue';
  import Modal4 from './Modal4.vue';
  import { ComponentOptions, nextTick, ref, shallowRef, defineComponent } from 'vue';
  export default defineComponent({
    components: { Modal1, Modal2, Modal3, Modal4 },
    setup() {
      const currentModal = shallowRef<Nullable<ComponentOptions>>(null);
      const modalShow = ref<Boolean>(false);
      const userData = ref<any>(null);
      const [register1, { openModal: openModal1 }] = useModal();
      const [register2, { openModal: openModal2 }] = useModal();
      const [register3, { openModal: openModal3 }] = useModal();
      const [register4, { openModal: openModal4 }] = useModal();
      // const [modalRegister, { openModal, closeModal, setModalProps }] = useModal();

      function send() {
        openModal4(true, {
          data: 'content',
          info: 'Info',
        });
      }
      function openModalLoading() {
        openModal1(true);
        // setModalProps({ loading: true });
        // setTimeout(() => {
        //   setModalProps({ loading: false });
        // }, 2000);
      }

      // async function okModal() {
      //   changeLoading({ loading: true });
      //   await promiseTimeout(1500);
      //   changeLoading({ loading: false });
      //   closeModal();
      // }

      // function handleDrag() {
      //   console.log(...arguments);
      // }
      function openTargetModal(index) {
        switch (index) {
          case 1:
            currentModal.value = Modal1;
            break;
          case 2:
            currentModal.value = Modal2;
            break;
          case 3:
            currentModal.value = Modal3;
            break;
          default:
            currentModal.value = Modal4;
            break;
        }
        nextTick(() => {
          // `useModal` not working with dynamic component
          // passing data through `userData` prop
          userData.value = { data: Math.random(), info: 'Info222' };
          // open the target modal
          modalShow.value = true;
        });
      }
      return {
        register1,
        openModal1,
        register2,
        openModal2,
        register3,
        openModal3,
        register4,
        openModal4,
        modalShow,
        userData,
        openTargetModal,
        send,
        currentModal,
        openModalLoading,
      };
    },
  });
</script>
