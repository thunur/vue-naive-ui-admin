<template>
  <span :class="[`${prefixCls}__extra-fold`, wrapperClass]" @click="handleFold">
    <Icon icon="radix-icons:exit-full-screen" v-if="getIsUnFold" :class="iconClass" />
    <Icon icon="radix-icons:enter-full-screen" v-else :class="iconClass" />
  </span>
</template>
<script setup lang="ts">
  import { and, not } from '@vueuse/core';

  import { useDesign } from '/@/hooks/web/useDesign';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import useExtra from './useExtra';

  const { prefixCls } = useDesign('multiple-tabs-content');
  const { getShowMenu, setMenuSetting } = useMenuSetting();
  const { getShowHeader, setHeaderSetting } = useHeaderSetting();

  const getIsUnFold = and(not(getShowMenu), not(getShowHeader));

  function handleFold() {
    const isUnFold = getIsUnFold.value;
    setMenuSetting({
      show: isUnFold,
      hidden: !isUnFold,
    });
    setHeaderSetting({ show: isUnFold });
  }
  const { wrapperClass, iconClass } = useExtra();
</script>
