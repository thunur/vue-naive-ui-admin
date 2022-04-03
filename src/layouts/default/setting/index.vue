<template>
  <div class="app-layout-header-anction-icon px-3" @click="setDrawerState(true)">
    <Icon icon="ion-settings-outline" />
    <SettingDrawer />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import SettingDrawer from './SettingDrawer.vue';

  import { useDrawer, useDrawerEnum } from '/@/hooks/component/useDrawer';

  export default defineComponent({
    name: 'SettingButton',
    components: { SettingDrawer },
    setup() {
      const [_, setDrawerState] = useDrawer(useDrawerEnum.AppConfigDrawer);
      return {
        setDrawerState,
      };
    },
  });
</script>
