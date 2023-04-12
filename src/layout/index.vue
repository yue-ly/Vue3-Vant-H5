<script lang="ts" setup>
import { useUserStore } from "@/store/modules/user";
const userStore = useUserStore();
const updateName = () => {
  userStore.updateName("rotel");
};
</script>

<template>
  <div class="app-container">
    <van-cell-group>
      <van-cell title="用户名" :value="userStore.name" />
      <van-cell title="长度" :value="userStore.nameLength" />
      <van-cell title="icon 图标">
        <template #value>
          <i class="iconfont icon-xinzeng"></i>
        </template>
      </van-cell>
      <van-button @click="updateName()">点击变成小写</van-button>
    </van-cell-group>
  </div>
</template>

<style scoped>
/* 这里是样式 */
</style>
