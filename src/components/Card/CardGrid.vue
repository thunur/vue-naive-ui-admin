<template>
  <NGrid
    :class="prefixCls"
    :style="getStyle"
    v-bind="omit($attrs, ['y-gap', 'x-gap'])"
    :y-gap="1"
    :x-gap="1"
  >
    <slot />
  </NGrid>
</template>

<script setup lang="ts">
  import { computed, CSSProperties } from 'vue';
  import { omit } from 'lodash-es';
  import { getNaiveCssVarsRef } from '/@/hooks/core/useNaiveInternal';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('card-grid');
  const borderColorRef = getNaiveCssVarsRef('Card', 'borderColor')!;
  const getStyle = computed((): CSSProperties => {
    return {
      backgroundColor: borderColorRef.value,
      transition: 'background-color var(--app-transition-duration) var(--app-bezier)',
      paddingTop: '1px',
    };
  });
</script>
