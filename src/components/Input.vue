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
type InputHandler = (e: "inputHandler", target: HTMLInputElement) => void;
// Passing props
const props = defineProps<Props>();
const emit = defineEmits<InputHandler>();

// onChange Handler
const inputHandler = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("inputHandler", target);
};
</script>

<template>
  <div class="input-form" v-if="expiration">
    <label for="months">{{ label }}</label>
    <div class="expire">
      <input
        id="months"
        name="months"
        v-model="data.months"
        @input="inputHandler"
        type="number"
        placeholder="MM"
        autocomplete="off"
      />
      <input
        id="years"
        name="years"
        v-model="data.years"
        @input="inputHandler"
        type="number"
        placeholder="YY"
        autocomplete="off"
      />
    </div>
    <span class="error-msg" v-for="months in v$.months.$errors">
      {{ months.$message }}
    </span>
    <span class="error-msg" v-for="errorYears in v$.years.$errors">
      {{ errorYears.$message }}
    </span>
  </div>
  <div class="input-form" v-else>
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      v-model="data[name as Name]"
      @input="inputHandler"
      :type="type || 'text'"
      :placeholder="placeholder"
      autocomplete="off"
    />
    <span v-for="error in v$[name as Name].$errors" class="error-msg">{{ error.$message }}</span>
  </div>
</template>

<style scoped>
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
