<template>
  <section class="suggestions-list">
    <h2>{{ $t('home.suggestions_title') }}</h2>
    <ul>
      <li v-for="(suggestion, index) in suggestions" :key="index">
        - {{ suggestion }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Hacer las sugerencias reactivas usando computed
const suggestions = computed(() => [
  t('home.suggestion_1'),
  t('home.suggestion_2'),
  t('home.suggestion_3')
])
</script>

<style scoped>
.suggestions-list {
  margin-top: 1rem;
  font-weight: 500;
  color: #333;
}

.suggestions-list ul {
  padding-left: 1.5rem;
}
</style>