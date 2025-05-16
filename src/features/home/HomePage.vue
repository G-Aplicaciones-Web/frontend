<template>
  <section class="home-container">
    <h1>{{ $t('home.welcome') }}</h1>

    <div class="consumption-images">
      <img src="/images/consumption-last-month.png" alt="Last Month Consumption" />
      <img src="/images/consumption-this-month.png" alt="This Month Consumption" />
    </div>

    <SavingsComparison />

    <SuggestionsList />

    <div class="device-consumption-summary">
      <h2>{{ $t('home.top_consumers') }}</h2>
      <ul>
        <li v-for="device in topConsumers" :key="device.id">
          {{ device.name }} - {{ device.consumption }} kWh
        </li>
      </ul>

      <h2>{{ $t('home.least_consumers') }}</h2>
      <ul>
        <li v-for="device in leastConsumers" :key="device.id">
          {{ device.name }} - {{ device.consumption }} kWh
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SavingsComparison from './components/SavingsComparison.vue'
import SuggestionsList from './components/SuggestionsList.vue'
import {$t} from "@primeuix/styled";

const { t } = useI18n()

// Mock data (replace with API call later)
const topConsumers = ref([
  { id: 1, name: 'Air Conditioner', consumption: 120 },
  { id: 2, name: 'Industrial Oven', consumption: 95 },
  { id: 3, name: 'Lighting System', consumption: 80 }
])

const leastConsumers = ref([
  { id: 4, name: 'Office Computers', consumption: 20 },
  { id: 5, name: 'Coffee Machine', consumption: 15 },
  { id: 6, name: 'Water Dispenser', consumption: 10 }
])
</script>

<style scoped>
.home-container {
  padding: 1.5rem 2rem;
  font-family: 'Poppins', sans-serif;
}

.consumption-images {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.consumption-images img {
  width: 45%;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.device-consumption-summary h2 {
  margin-top: 2rem;
  color: var(--main-green);
}

.device-consumption-summary ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}
</style>