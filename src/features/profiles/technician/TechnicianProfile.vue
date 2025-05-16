<template>
  <section class="profile-container">
    <div class="profile-header">
      <h1 class="profile-title">{{ $t('profile.technician_title') }}</h1>
      <div class="profile-badge">{{ user.plan }}</div>
    </div>

    <div class="profile-card">
      <div class="profile-info">
        <div class="avatar-container">
          <img :src="user.photo" :alt="$t('profile.technician_title')" class="profile-photo" />
          <div class="status-indicator"></div>
        </div>

        <div class="details">
          <div class="detail-item">
            <span class="detail-label">{{ $t('profile.name') }}:</span>
            <span class="detail-value">{{ user.name }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">{{ $t('profile.username') }}:</span>
            <span class="detail-value">@{{ user.username }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">{{ $t('profile.email') }}:</span>
            <span class="detail-value">{{ user.email }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">{{ $t('profile.time_with_us') }}:</span>
            <span class="detail-value">{{ user.timeWithUs }}</span>
          </div>
          <div class="detail-item highlight">
            <span class="detail-label">{{ $t('profile.plan_days_left') }}:</span>
            <span class="detail-value">{{ user.planDaysLeft }}</span>
          </div>
        </div>
      </div>

      <div class="action-buttons">
        <button class="btn support-btn" @click="contactSupport">
          <i class="pi pi-lifebuoy"></i>
          {{ $t('profile.contact_support') }}
        </button>
        <button class="btn delete-btn" @click="deleteAccount">
          <i class="pi pi-trash"></i>
          {{ $t('profile.delete_account') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const user = reactive({
  photo: '/images/technician-user.jpg',
  name: 'Marcos Alvarado',
  username: 'marctec69',
  email: 'marquitos69@gmail.com',
  plan: 'PLUS',
  planDaysLeft: '24 days',
  timeWithUs: '3 months'
})

function deleteAccount() {
  alert(t('profile.account_deleted'))
}

function contactSupport() {
  alert(t('profile.contact_support_alert'))
}
</script>

<style scoped>
.profile-container {
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.profile-title {
  color: #328e6e;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

.profile-badge {
  background-color: #328e6e;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.profile-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  border: 1px solid #e9ecef;
}

.profile-info {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.avatar-container {
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-photo {
  width: 180px;  /* Aumentado de 140px */
  height: 180px; /* Aumentado de 140px */
  border-radius: 24px; /* Cambiado de 50% (círculo) a 24px (cuadrado redondeado) */
  object-fit: cover;
  border: 4px solid #328e6e;
  box-shadow: 0 4px 12px rgba(50, 142, 110, 0.2);
}

.status-indicator {
  position: absolute;
  bottom: 15px;  /* Ajustado para nueva posición */
  right: 15px;   /* Ajustado para nueva posición */
  width: 24px;   /* Aumentado de 20px */
  height: 24px;  /* Aumentado de 20px */
  border-radius: 50%;
  background-color: #4caf50;
  border: 3px solid white; /* Aumentado de 2px */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.details {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.detail-item.highlight {
  background-color: rgba(50, 142, 110, 0.1);
  border-left: 3px solid #328e6e;
}

.detail-label {
  font-size: 0.85rem;
  color: #547792;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.detail-value {
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 600;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 0.95rem;
}

.support-btn {
  background-color: #328e6e;
  color: white;
}

.support-btn:hover {
  background-color: #266a53;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(50, 142, 110, 0.3);
}

.delete-btn {
  background-color: #e63946;
  color: white;
}

.delete-btn:hover {
  background-color: #b53038;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(230, 57, 70, 0.3);
}

@media (max-width: 768px) {
  .profile-info {
    flex-direction: column;
    align-items: center;
  }

  .details {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .profile-photo {
    width: 160px;
    height: 160px;
    margin-bottom: 1.5rem;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>