<template>
  <NTooltip trigger="hover" placement="bottom" :delay="300">
    <template #trigger>
      <span
        class="cursor-pointer h-full px-2.5 flex justify-between items-center hover:bg-$hover-color"
        @click="toggle"
      >
        <Icon
          icon="ant-design:fullscreen-exit-outlined"
          v-if="isFullscreen"
          viewBox="64 64 896 896"
        />
        <Icon icon="ant-design:fullscreen-outlined" v-else viewBox="64 64 896 896" />
      </span>
    </template>
    {{ getTitle }}
  </NTooltip>
</template>
<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { useI18n } from '@/hooks/web/useI18n';
  import { useFullscreen } from '@vueuse/core';

  export default defineComponent({
    name: 'FullScreen',
    setup() {
      const { t } = useI18n();
      const { toggle, isFullscreen } = useFullscreen();

      const getTitle = computed(() =>
        unref(isFullscreen)
          ? t('layout.header.tooltipExitFull')
          : t('layout.header.tooltipEntryFull')
      );

      return {
        getTitle,
        isFullscreen,
        toggle,
      };
    },
  });
</script>
