<template>
  <component v-if="type" :is="componentMap.get(type)" @click="handleClick" />
</template>

<script lang="ts">
  export default {
    name: 'Trigger',
  };
</script>

<script setup lang="ts">
  import type { Component } from 'vue';
  import { TriggerEnum } from '/@/enums/menuEnum';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import { isFunction } from 'lodash-es';

  import BarTrigger from './BarTrigger.vue';
  import ButtonTrigger from './ButtonTrigger.vue';
  import HeaderTrigger from './HeaderTrigger.vue';
  import BottomTrigger from './BottomTrigger.vue';

  const props = withDefaults(
    defineProps<{
      type?: TriggerEnum;
      onClick?: Fn;
    }>(),
    {
      type: TriggerEnum.BUTTON,
    }
  );

  const componentMap = new Map<TriggerEnum, Component>();
  componentMap.set(TriggerEnum.BAR, BarTrigger);
  componentMap.set(TriggerEnum.BUTTON, ButtonTrigger);
  componentMap.set(TriggerEnum.HEADER, HeaderTrigger);
  componentMap.set(TriggerEnum.BOTTOM, BottomTrigger);

  const { toggleCollapsed } = useMenuSetting();
  const handleClick = () => {
    if (props?.onClick && isFunction(props.onClick)) {
      props.onClick();
    } else {
      toggleCollapsed();
    }
  };
</script>
