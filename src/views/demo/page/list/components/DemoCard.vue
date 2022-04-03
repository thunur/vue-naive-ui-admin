<template>
  <n-grid cols="1 400:2 800:3 1000:4" x-gap="16" y-gap="16">
    <n-gi v-for="i in num" :key="i">
      <n-card>
        <n-thing>
          <template #avatar>
            <n-icon size="36">
              <Icon icon="logos-javascript" v-if="i % 5 === 0" />
              <Icon icon="logos-vue" v-else-if="i % 5 === 1" />
              <Icon icon="logos-react" v-else-if="i % 5 === 2" />
              <Icon icon="logos-angular-icon" v-else-if="i % 5 === 3" />
              <Icon icon="logos-svelte-icon" v-else />
            </n-icon>
          </template>
          <template #header> 一个八个字的标题 </template>

          <template #description>
            <n-text :depth="3">
              <Time :time="Date.now()" format="hh:mm:ss" />
            </n-text>
          </template>
          货币是为了提高交易效率而用于交换的中介商品。
        </n-thing>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script lang="ts" setup>
  defineProps({
    num: {
      type: Number,
      default: 16,
    },
  });
</script>
