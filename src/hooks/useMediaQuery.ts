import { ref, onMounted, onUnmounted, computed } from "vue";

const useMediaQuery = () => {
  let windowWidth = ref(window.innerWidth);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));
  const width = computed(() => windowWidth.value);
  const isLaptop = computed(() => (windowWidth.value >= 1024 ? true : false));

  return { width, isLaptop };
};

export default useMediaQuery;
