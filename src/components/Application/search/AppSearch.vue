<script lang="tsx">
  import { useMagicKeys } from '@vueuse/core';
  import { defineComponent, ref, unref, watch } from 'vue';
  import AppSearchModal from './AppSearchModal.vue';
  import Icon from '@/components/Icon';

  export default defineComponent({
    name: 'AppSearch',
    setup() {
      const showModal = ref(false);

      function changeModal(show: boolean) {
        showModal.value = show;
      }
      const keys = useMagicKeys();
      // mac组合键
      const CommandK = keys['Command+K'];
      // windows组合键
      const CtrlK = keys['Ctrl+K'];
      // 监听是否按下组合键打开搜索框
      watch(CommandK, (v) => {
        if (v) showModal.value = true;
      });

      watch(CtrlK, (v) => {
        if (v) showModal.value = true;
      });

      return () => {
        return (
          <div onClick={changeModal.bind(null, true)}>
            <Icon icon="akar-icons:search" class="text-18px" />
            <AppSearchModal onClose={changeModal.bind(null, false)} visible={unref(showModal)} />
          </div>
        );
      };
    },
  });
</script>
