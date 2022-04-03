<template>
  <n-list bordered class="my-0">
    <n-list-item v-for="i in num" :key="i">
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
        <template #header> 货币 </template>
        <template #header-extra>
          <n-button circle size="small">
            <template #icon>
              <Icon icon="logos:vue" />
            </template>
          </n-button>
        </template>
        <template #description>
          <Time :time="Date.now()" />
        </template>
        货币是为了提高交易效率而用于交换的中介商品。货币有多种形式，如贝壳粮食等自然物、金属纸张等加工品、银行卡信用卡等磁条卡、移动支付加密货币等APP。
        <template #action>
          <n-space>
            <n-button quaternary size="small">
              <template #icon>
                <n-icon>
                  <Icon icon="logos:svelte-icon" />
                </n-icon>
              </template>
              {{ i }} 块钱
            </n-button>
            <n-button quaternary size="small">
              <template #icon>
                <n-icon>
                  <Icon icon="logos:react" />
                </n-icon>
              </template>
              {{ i * 10 }} 块钱
            </n-button>
            <n-button quaternary size="small">
              <template #icon>
                <n-icon>
                  <Icon icon="logos:angular-icon" />
                </n-icon>
              </template>
              {{ i * 100 }} 块钱
            </n-button>
          </n-space>
        </template>
      </n-thing>
    </n-list-item>
  </n-list>
</template>

<script lang="ts" setup>
  defineProps({
    num: {
      type: Number,
      default: 6,
    },
  });
</script>
