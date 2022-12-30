<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
type Status = "online" | "offline"
const useNetworkStatus = (callback: (status: Status) => void) => {
  const updateOnlineStatus = () => {
    const status: Status = navigator.onLine ? "online" : "offline";
    callback(status);
  };

  onMounted(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
  });

  onUnmounted(() => {
    window.removeEventListener("online", updateOnlineStatus);
    window.removeEventListener("offline", updateOnlineStatus);
  });
};
useNetworkStatus((status) => {
  console.log(`Your network status is ${status}`);
});
</script>

<template>
  
</template>

<style scoped></style>
