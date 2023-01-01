<script setup lang="ts">
import type { Data, Name } from "../types";
type Props = {
  data: Data;
  label: string;
  name?: Name;
  expiration?: boolean;
  type?: string;
  placeholder?: string;
};
type OnChangeEvent = (event: "onChange", e: Event) => void;
const props = defineProps<Props>();
const emit = defineEmits<OnChangeEvent>();

const inputHandler = (e: Event) => {
  emit("onChange", e);
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
        @input="inputHandler"
        :type="type || 'text'"
        placeholder="MM"
        autocomplete="off"
      />
      <input
        id="years"
        name="years"
        :value="data.years"
        @input="inputHandler"
        :type="type || 'text'"
        placeholder="YY"
        autocomplete="off"
      />
    </div>
  </div>
  <div class="input-form" v-else>
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :value="data[name as Name]"
      @input="inputHandler"
      :type="type || 'text'"
      :placeholder="placeholder"
      autocomplete="off"
    />
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
