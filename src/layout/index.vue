
<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user'
import { dateToDateOnlyStringWithDash } from '@/utils/index'
const userStore = useUserStore();
const updateName = () => {
  userStore.updateName('rotel')
}
const dateNew = dateToDateOnlyStringWithDash(new Date())
</script>

<template>
  <div class="app-container">
    <van-cell-group>
      <van-cell title="用户名" :value="userStore.name" />
      <van-cell title="长度" :value="userStore.nameLength"/>
      <van-button @click="updateName()">点击变成小写</van-button>
      {{ dateNew }}
    </van-cell-group>
  </div>
</template>

<style scoped>
/* 这里是样式 */
</style>
