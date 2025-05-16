<template>
  <section class="devices-container">
    <h1>{{ $t('devices.title') }}</h1>
    <div class="device-lists">
      <div class="device-list connected">
        <h2>{{ $t('devices.connected') }}</h2>
        <ConnectedDevicesList
            :devices="connectedDevices"
            @disconnect="handleDisconnect"
        />
      </div>

      <div class="device-list disconnected">
        <h2>{{ $t('devices.disconnected') }}</h2>
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
import {$t} from "@primeuix/styled";

const { t } = useI18n()

// Mock data
const devices = ref([
  {
    id: 1,
    name: 'Air Conditioner',
    type: 'HVAC',
    status: 'on',
    consumption: 120,
    image: '/images/device-icons/ac.png'
  },
  {
    id: 2,
    name: 'Industrial Oven',
    type: 'Kitchen',
    status: 'off',
    consumption: 95,
    image: '/images/device-icons/oven.png'
  },
  {
    id: 3,
    name: 'Lighting System',
    type: 'Lighting',
    status: 'on',
    consumption: 80,
    image: '/images/device-icons/lighting.png'
  },
  {
    id: 4,
    name: 'Coffee Machine',
    type: 'Kitchen',
    status: 'off',
    consumption: 15,
    image: '/images/device-icons/coffee.png'
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
    alert(t('devices.change_success'))
  }
}

function handleDisconnect(deviceId) {
  const device = devices.value.find(d => d.id === deviceId)
  if (device) {
    device.status = 'off'
    updateLists()
    alert(t('devices.change_success'))
  }
}
</script>

<style scoped>
.devices-container {
  padding: 1.5rem 2rem;
  font-family: 'Poppins', sans-serif;
}

.device-lists {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}

.device-list {
  flex: 1;
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

.device-list h2 {
  color: var(--main-green);
  margin-bottom: 1rem;
}
</style>