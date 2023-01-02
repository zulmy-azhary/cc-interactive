<script setup lang="ts">
import { computed } from "vue";
type Props = {
  length: number;
  value?: string;
  defaultValue?: string;
  chars: string[];
};

const props = withDefaults(defineProps<Props>(), {
  defaultValue: "0000",
});

const calculate = computed(() => {
  const _value = (props.value || "") + props.defaultValue.slice(props.value?.length);
  const data = Array(props.length).fill(0);

  const isActive = (i: number, _i: number) => {
    if (props.chars.indexOf(_value[i]?.toUpperCase()) === -1 && _i === 0) return true;
    return props.chars.indexOf(_value[i]?.toUpperCase()) === _i;
  };

  return { data, isActive };
});
</script>

<template>
  <div class="card-text">
    <template v-for="(_, idx) in calculate.data">
      <template v-for="(char, i) in chars">
        <p v-if="calculate.isActive(idx, i)">{{ char }}</p>
        <template v-else />
      </template>
    </template>
  </div>
</template>

<style scoped>
.card-text {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  column-gap: 0.25rem;
}

.card-text p {
  text-align: center;
  animation: fadeIn 0.35s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>