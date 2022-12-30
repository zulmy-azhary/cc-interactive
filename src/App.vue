<script setup lang="ts">
import useMediaQuery from "./hooks/useMediaQuery";
import { Sidebar, Content } from "./components";

const { width, isLaptop } = useMediaQuery();
</script>

<template>
  <Sidebar />
  <main id="main">
    <Content />
    <p>Width: {{ width }}px</p>
    <p>IsLaptop: {{ isLaptop }}</p>
  </main>
</template>

<style scoped>
#main {
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
