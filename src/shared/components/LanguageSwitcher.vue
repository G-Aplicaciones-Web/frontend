<template>
  <div class="language-switcher">
    <button
        :class="{ active: locale === 'es' }"
        @click="changeLocale('es')"
        aria-label="Change language to Spanish"
    >
      ES
    </button>
    <button
        :class="{ active: locale === 'en' }"
        @click="changeLocale('en')"
        aria-label="Change language to English"
    >
      EN
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

function changeLocale(lang) {
  locale.value = lang
}
</script>

<style scoped>
.language-switcher button {
  margin-left: 1rem;
  background: none;
  border: 2px solid transparent;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: #000;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.language-switcher button:hover {
  border-color: #547792;
  color: #547792;
}

.language-switcher button.active {
  border-color: #328e6e;
  color: #328e6e;
  font-weight: 700;
}
</style>