<template>
  <span
    class="cursor-pointer h-full px-2.5 flex justify-between items-center hover:bg-$hover-color"
    @click="onClick"
  >
    <Icon icon="ant-design:menu-unfold-outlined" v-if="collapsed" viewBox="64 64 896 896" />
    <Icon icon="ant-design:menu-fold-outlined" v-else viewBox="64 64 896 896" />
  </span>
</template>
<script setup lang="ts">
  import { propTypes } from '/@/utils/propTypes';

  defineProps({
    collapsed: propTypes.bool.def(false),
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  });
</script>
