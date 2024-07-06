<template>
  <footer
    v-if="show || getShowLayoutFooter"
    :class="prefixCls"
    class="text-center my-6 space-x-2 flex flex justify-center"
  >
    <Icon
      icon="ant-design:github-filled"
      :class="`${prefixCls}__icon`"
      class="cursor-pointer text-18px text-gray-400 hover:text-gray-800 dark:(text-gray-600 hover:text-gray-400)"
      @click="openWindow(GITHUB_URL)"
    />
    <div :class="`${prefixCls}__text`" class="text-gray-400 dark:text-gray-600"
      >Copyright &copy;2022 Aso.design</div
    >
  </footer>
</template>

<script lang="ts">
  import { computed, defineComponent, unref } from 'vue';

  import { GITHUB_URL } from '@/settings/siteSetting';
  import { openWindow } from '@/utils';

  import { useRootSetting } from '@/hooks/setting/useRootSetting';
  import { useRouter } from 'vue-router';
  import { useDesign } from '@/hooks/web/useDesign';

  export default defineComponent({
    name: 'LayoutFooter',
    props: {
      show: Boolean,
    },
    setup() {
      const { getShowFooter } = useRootSetting();
      const { currentRoute } = useRouter();
      const { prefixCls } = useDesign('layout-footer');

      const getShowLayoutFooter = computed(() => {
        return unref(getShowFooter) && !unref(currentRoute).meta?.hiddenFooter;
      });

      return {
        getShowLayoutFooter,
        prefixCls,
        GITHUB_URL,
        openWindow,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-layout-footer';
</style>
