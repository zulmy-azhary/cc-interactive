<script setup lang="ts">
import { v$ } from "../store";
import type { Data, Name } from "../types";
type Props = {
  data: Data;
  label: string;
  name?: Name;
  expiration?: boolean;
  type?: string;
  placeholder?: string;
};
type OnChangeEvent = (e: "onChange", target: HTMLInputElement) => void;
// Passing props
defineProps<Props>();
const emit = defineEmits<OnChangeEvent>();

// onChange Handler
const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("onChange", target);
};
</script>

<template>
  <div class="input-form" v-if="expiration">
    <label for="months">{{ label }}</label>
    <div class="expire">
      <input
        id="months"
        name="months"
        :value="data.months"
        @input="onChange"
        type="number"
        placeholder="MM"
        autocomplete="off"
        :class="v$.months.$error ? 'error-input' : ''"
      />
      <input
        id="years"
        name="years"
        :value="data.years"
        @input="onChange"
        type="number"
        placeholder="YY"
        autocomplete="off"
        :class="v$.years.$error ? 'error-input' : ''"
      />
    </div>
    <span class="error-msg" v-if="v$.months.$error || v$.years.$error">
      {{ v$.months.$errors[0]?.$message || v$.years.$errors[0]?.$message }}
    </span>
    <template v-else />
  </div>
  <div class="input-form" v-else>
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :value="data[name as Name]"
      @input="onChange"
      :type="type || 'text'"
      :placeholder="placeholder"
      autocomplete="off"
      :class="v$[name as Name].$error ? 'error-input' : ''"
    />
    <span class="error-msg" v-if="v$[name as Name].$error">{{
      v$[name as Name].$errors[0].$message
    }}</span>
    <template v-else />
  </div>
</template>

<style scoped>
::-webkit-inner-spin-button {
  display: none;
}

.input-form {
  display: flex;
  flex-direction: column;
  grid-column: span 4;
}

.input-form:nth-of-type(3),
.input-form:nth-of-type(4) {
  grid-column: span 2;
}

.expire {
  display: flex;
  column-gap: 0.5rem;
}

.error-input {
  border-color: var(--red);
}
.error-input:focus,
.error-input:active {
  border-color: var(--red);
}

.error-msg {
  color: var(--red);
  font-size: 0.7rem;
  font-weight: bold;
  line-height: 1.5rem;
}

label {
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: 1px;
}

input {
  border: 1px solid var(--lightGrayishViolet);
  font-weight: bold;
}

input::placeholder {
  color: var(--lightGrayishViolet);
}
input:focus,
input:active {
  border-color: var(--darkGrayishViolet);
  outline: none;
}
</style>
