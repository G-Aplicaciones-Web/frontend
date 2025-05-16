<template>
  <section class="home-container">
    <h1 class="welcome-title">{{ $t('home.welcome') }}</h1>

    <div class="consumption-images">
      <img
          src="/images/consumption-last-month.png"
          :alt="$t('home.last_month_consumption')"
          class="consumption-image"
      />
      <img
          src="/images/consumption-this-month.png"
          :alt="$t('home.this_month_consumption')"
          class="consumption-image"
      />
    </div>

    <SavingsComparison />

    <SuggestionsList />

    <div class="device-consumption-summary">
      <div class="consumption-section">
        <h2 class="section-title">{{ $t('home.top_consumers') }}</h2>
        <ul class="device-list">
          <li v-for="device in topConsumers" :key="device.id" class="device-item">
            <span class="device-name">{{ device.name }}</span>
            <span class="device-consumption">{{ device.consumption }} kWh</span>
          </li>
        </ul>
      </div>

      <div class="consumption-section">
        <h2 class="section-title">{{ $t('home.least_consumers') }}</h2>
        <ul class="device-list">
          <li v-for="device in leastConsumers" :key="device.id" class="device-item">
            <span class="device-name">{{ device.name }}</span>
            <span class="device-consumption">{{ device.consumption }} kWh</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SavingsComparison from './components/SavingsComparison.vue'
import SuggestionsList from './components/SuggestionsList.vue'

const { t } = useI18n()

const topConsumers = ref([
  { id: 1, name: t('devices.air_conditioner'), consumption: 120 },
  { id: 2, name: t('devices.industrial_oven'), consumption: 95 },
  { id: 3, name: t('devices.lighting_system'), consumption: 80 }
])

const leastConsumers = ref([
  { id: 4, name: t('devices.office_computers'), consumption: 20 },
  { id: 5, name: t('devices.coffee_machine'), consumption: 15 },
  { id: 6, name: t('devices.water_dispenser'), consumption: 10 }
])
</script>

<style scoped>
.home-container {
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-title {
  color: #328e6e;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.consumption-images {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.consumption-image {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.consumption-image:hover {
  transform: translateY(-5px);
}

.device-consumption-summary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.consumption-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.section-title {
  color: #328e6e;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.device-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.device-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;
}

.device-item:last-child {
  border-bottom: none;
}

.device-name {
  color: #333;
  font-weight: 500;
}

.device-consumption {
  color: #547792;
  font-weight: 600;
}

@media (max-width: 768px) {
  .consumption-images {
    flex-direction: column;
    align-items: center;
  }

  .device-consumption-summary {
    grid-template-columns: 1fr;
  }

  .consumption-image {
    max-width: 100%;
  }
}
</style>