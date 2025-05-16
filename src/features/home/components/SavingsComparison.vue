<template>
  <section class="savings-comparison">
    <h2>{{ $t('home.savings_comparison_title') }}</h2>
    <p>{{ $t('home.savings_comparison_text', { percentage: 25 }) }}</p>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.savings-comparison {
  background-color: #e6f2f0;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  color: #328e6e;
  font-weight: 600;
}
</style>