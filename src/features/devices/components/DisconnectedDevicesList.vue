<template>
  <ul class="device-list-ul">
    <li v-for="device in devices" :key="device.id" class="device-item">
      <img :src="device.image" :alt="device.name" class="device-image" />
      <div class="device-info">
        <h3>{{ device.name }}</h3>
        <p>{{ device.type }}</p>
        <p>{{ $t('devices.status_off') }}</p>
        <p>{{ device.consumption }} kWh</p>
      </div>
      <button class="btn connect-btn" @click="$emit('connect', device.id)">
        {{ $t('devices.connect') }}
      </button>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  devices: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.device-list-ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.device-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: white;
  padding: 0.5rem;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(50, 142, 110, 0.2);
}

.device-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 1rem;
}

.device-info {
  flex-grow: 1;
}

.device-info h3 {
  margin: 0 0 0.25rem 0;
}

.connect-btn {
  background-color: #328e6e; /* green */
  border: none;
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}

.connect-btn:hover {
  background-color: #266a53;
}
</style>