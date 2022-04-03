<template>
  <span :class="[`${prefixCls}__extra-redo`, wrapperClass]" @click="handleRedo">
    <Icon
      icon="codicon-refresh"
      :class="[iconClass, loading ? '*spin animate-duration-1200' : '']"
    />
  </span>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useTabs } from '/@/hooks/web/useTabs';
  import getCommonCls from './useExtra';

  const loading = ref(false);

  const { prefixCls } = useDesign('multiple-tabs-content');

  const { refreshPage } = useTabs();
  const { wrapperClass, iconClass } = getCommonCls();

  async function handleRedo() {
    loading.value = true;
    await refreshPage();
    setTimeout(() => {
      loading.value = false;
      // Animation execution time
    }, 1200);
  }
</script>
