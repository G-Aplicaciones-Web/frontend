<template>
  <section class="devices-container">
    <div class="devices-header">
      <h1 class="devices-title">{{ $t('devices.title') }}</h1>
      <div class="devices-summary">
        <span class="summary-item connected">
          <i class="pi pi-check-circle"></i>
          {{ connectedDevices.length }} {{ $t('devices.connected') }}
        </span>
        <span class="summary-item disconnected">
          <i class="pi pi-times-circle"></i>
          {{ disconnectedDevices.length }} {{ $t('devices.disconnected') }}
        </span>
      </div>
    </div>

    <div class="device-lists">
      <div class="device-list connected">
        <div class="list-header">
          <h2>
            <i class="pi pi-check-circle"></i>
            {{ $t('devices.connected') }}
          </h2>
          <span class="badge">{{ connectedDevices.length }}</span>
        </div>
        <ConnectedDevicesList
            :devices="connectedDevices"
            @disconnect="handleDisconnect"
        />
      </div>

      <div class="device-list disconnected">
        <div class="list-header">
          <h2>
            <i class="pi pi-times-circle"></i>
            {{ $t('devices.disconnected') }}
          </h2>
          <span class="badge">{{ disconnectedDevices.length }}</span>
        </div>
        <DisconnectedDevicesList
            :devices="disconnectedDevices"
            @connect="handleConnect"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ConnectedDevicesList from './components/ConnectedDevicesList.vue'
import DisconnectedDevicesList from './components/DisconnectedDevicesList.vue'

const { t } = useI18n()


const devices = ref([
  {
    id: 1,
    name: 'Air Conditioner',
    type: 'HVAC',
    status: 'on',
    consumption: 120,
    image: '/images/ac.png',
    location: 'Office Floor 2',
    lastActive: '2 mins ago'
  },
  {
    id: 2,
    name: 'Industrial Oven',
    type: 'Kitchen',
    status: 'off',
    consumption: 95,
    image: '/images/oven.png',
    location: 'Main Kitchen',
    lastActive: '5 hours ago'
  },
  {
    id: 3,
    name: 'Lighting System',
    type: 'Lighting',
    status: 'on',
    consumption: 80,
    image: '/images/lighting.png',
    location: 'Reception Area',
    lastActive: 'Just now'
  },
  {
    id: 4,
    name: 'Coffee Machine',
    type: 'Kitchen',
    status: 'off',
    consumption: 15,
    image: '/images/coffee.png',
    location: 'Break Room',
    lastActive: '1 day ago'
  }
])

const connectedDevices = ref(devices.value.filter(d => d.status === 'on'))
const disconnectedDevices = ref(devices.value.filter(d => d.status === 'off'))

function updateLists() {
  connectedDevices.value = devices.value.filter(d => d.status === 'on')
  disconnectedDevices.value = devices.value.filter(d => d.status === 'off')
}

function handleConnect(deviceId) {
  const device = devices.value.find(d => d.id === deviceId)
  if (device) {
    device.status = 'on'
    updateLists()

    console.log(t('devices.change_success'))
  }
}

function handleDisconnect(deviceId) {
  const device = devices.value.find(d => d.id === deviceId)
  if (device) {
    device.status = 'off'
    updateLists()

    console.log(t('devices.change_success'))
  }
}
</script>

<style scoped>
.devices-container {
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.devices-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.devices-title {
  color: #328e6e;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

.devices-summary {
  display: flex;
  gap: 1.5rem;
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.95rem;
}

.summary-item.connected {
  background-color: rgba(76, 175, 80, 0.1);
  color: #328e6e;
}

.summary-item.disconnected {
  background-color: rgba(244, 67, 54, 0.1);
  color: #e53935;
}

.device-lists {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.device-list {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  border: 1px solid #e9ecef;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.list-header h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #328e6e;
  font-size: 1.25rem;
  margin: 0;
}

.device-list.connected .list-header h2 {
  color: #328e6e;
}

.device-list.disconnected .list-header h2 {
  color: #547792;
}

.badge {
  background-color: #f8f9fa;
  color: #2c3e50;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .devices-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .device-lists {
    grid-template-columns: 1fr;
  }

  .devices-summary {
    width: 100%;
    justify-content: space-between;
  }
}
</style>