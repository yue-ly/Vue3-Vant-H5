<script setup lang="ts">
import { ref } from 'vue'
const checked = ref<boolean>(false)
</script>

<template>
  <div>
    <van-config-provider :theme="checked ? 'dark' : ''">
      夜间模式 <van-switch v-model="checked" size="22px" />
      <van-cell title="单元格" value="内容" />
    </van-config-provider>
  </div>
</template>

<style scoped lang="less">
</style>
