<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import MediaItem from "./components/MediaItem.vue";
import { computed } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const btnMsg = computed(() => {
  return isDark.value ? "深色" : "亮色";
});
</script>

<template>
  <div class="main-wrap">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <button @click="toggleDark()">{{ btnMsg }}</button>
  </div>
  <MediaItem></MediaItem>
</template>

<style lang="less">
/* 这里引入样式 */
@import "./assets/base.less";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
