<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './shared/components/Navbar.vue'
</script>

<style>
#app {
  min-height: 100vh;
  background-color: #fff;
  color: #000;
  font-family: 'Poppins', sans-serif;
}

main {
  padding: 1rem 2rem;
}
</style>