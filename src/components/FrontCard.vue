<script setup lang="ts">
import { data } from "../store";
import { CardName, CardNumber, CardDate } from ".";
</script>

<template>
  <div class="card card-front">
    <div class="card-front__content">
      <img class="card-front__logo" src="/assets/images/card-logo.svg" alt="Card Logo" />
      <div class="card-front__details">
        <CardNumber :cardNumber="data.cardNumber" />
        <div class="card-front__footer">
          <CardName :fullName="data.fullName" />
          <CardDate :expiration="{ months: data.months, years: data.years }" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-front {
  color: var(--lightGrayishViolet);
  background: url("/assets/images/bg-card-front.png") no-repeat 50% / cover;
  z-index: 1;
  transform: translate(-12.5%, 95%);
}

.card-front__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.card-front__logo {
  width: 20%;
  height: auto;
}

.card-front__details {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

.card-front__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 768px) {
  .card-front {
    transform: translate(-35%, 80%);
  }

  .card-front__details {
    row-gap: 0.75rem;
  }
}

@media (min-width: 1024px) {
  .card-front {
    transform: translateX(20%);
  }

  .card-front__content {
    padding: 1.5rem;
  }

  .card-front__details {
    row-gap: 1.25rem;
  }
}

@media (min-width: 1440px) {
  .card-front {
    transform: translateX(30%);
  }
}
</style>
