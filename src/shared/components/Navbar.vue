<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li>
        <router-link to="/" custom v-slot="{ navigate, isActive }">
          <a
              :class="{ 'active-link': isActive }"
              @click="navigate"
          >{{ $t('navbar.home') }}</a>
        </router-link>
      </li>
      <li>
        <router-link to="/devices" custom v-slot="{ navigate, isActive }">
          <a
              :class="{ 'active-link': isActive }"
              @click="navigate"
          >{{ $t('navbar.devices') }}</a>
        </router-link>
      </li>
      <li>
        <router-link to="/profile/company" custom v-slot="{ navigate, isActive }">
          <a
              :class="{ 'active-link': isActive }"
              @click="navigate"
          >{{ $t('navbar.profile_company') }}</a>
        </router-link>
      </li>
      <li>
        <router-link to="/profile/technician" custom v-slot="{ navigate, isActive }">
          <a
              :class="{ 'active-link': isActive }"
              @click="navigate"
          >{{ $t('navbar.profile_technician') }}</a>
        </router-link>
      </li>
    </ul>

    <div class="nav-actions">
      <button
          :class="{ active: locale === 'es' }"
          @click="changeLocale('es')"
          aria-label="Change language to Spanish"
      >
        {{ $t('navbar.language_es') }}
      </button>

      <button
          :class="{ active: locale === 'en' }"
          @click="changeLocale('en')"
          aria-label="Change language to English"
      >
        {{ $t('navbar.language_en') }}
      </button>

      <button class="logout-button" @click="logout">
        {{ $t('navbar.logout') }}
      </button>
    </div>
  </nav>
</template>

<script setup>

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()


function changeLocale(lang) {
  locale.value = lang
}

function logout() {
  alert('You have successfully logged out.')
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem 2rem;
  font-family: 'Poppins', sans-serif;
  border-bottom: 2px solid #328e6e;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: #000;
  padding: 0;
  margin: 0;
}

.nav-links li a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.active-link {
  color: #328e6e;
  font-weight: 700;
}

.nav-actions button {
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

.nav-actions button:hover {
  border-color: #547792;
  color: #547792;
}

.nav-actions button.active {
  border-color: #328e6e;
  color: #328e6e;
  font-weight: 700;
}

.logout-button {
  border-color: #e63946;
  color: #e63946;
}

.logout-button:hover {
  background-color: #e63946;
  color: white;
}
</style>