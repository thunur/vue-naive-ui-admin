<template>
  <BasicTitle :tipsMessage="tipsMessage" @dblclick="handleFullScreen">
    {{ title }}
  </BasicTitle>
</template>
<script lang="ts">
  import type { PropType } from 'vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BasicModalHeader',
    props: {
      tipsMessage: {
        type: [String, Array] as PropType<string | string[]>,
      },
      title: { type: String },
    },
    emits: ['dblclick'],
    setup(_, { emit }) {
      // 将双击事件
      function handleFullScreen(e: Event) {
        e?.stopPropagation();
        e?.preventDefault();
        // 回调给父组件
        emit('dblclick');
      }
      // 暴露方法
      return {
        handleFullScreen,
      };
    },
  });
</script>
