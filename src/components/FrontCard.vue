<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <div class="card card-front">
    <div class="card-front__content">
      <img class="card-front__logo" src="/assets/images/card-logo.svg" alt="Card Logo" />
      <div class="card-front__number">
        <h1>testes</h1>
      </div>
      <div class="card-front__footer">
        <p>test</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-front {
  color: var(--lightGrayishViolet);
  background: url("/assets/images/bg-card-front.png") no-repeat 50% / cover;
}

.card-front__logo {
  width: 20%;
  height: auto;
}

.card-front__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 3rem;
  padding: 1rem;
}

@media (min-width: 1024px) {
  .card-front {
    transform: translateX(30%);
  }
}
</style>
