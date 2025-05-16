<template>
  <section class="profile-container">
    <div class="profile-header">
      <h1 class="profile-title">{{ $t('profile.company_title') }}</h1>
      <div class="profile-badge enterprise-badge">{{ user.plan }}</div>
    </div>

    <div class="profile-card">
      <div class="profile-info">
        <div class="avatar-container">
          <img :src="user.photo" :alt="$t('profile.company_title')" class="profile-photo" />
          <div class="company-icon">
            <i class="pi pi-building"></i>
          </div>
        </div>

        <div class="details">
          <div class="detail-item">
            <span class="detail-label">{{ $t('profile.username') }}:</span>
            <span class="detail-value">{{ user.username }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">{{ $t('profile.email') }}:</span>
            <span class="detail-value">{{ user.email }}</span>
          </div>
          <div class="detail-item highlight">
            <span class="detail-label">{{ $t('profile.plan') }}:</span>
            <span class="detail-value">{{ user.plan }}</span>
          </div>
          <div class="detail-item highlight">
            <span class="detail-label">{{ $t('profile.plan_days_left') }}:</span>
            <span class="detail-value">{{ user.planDaysLeft }}</span>
          </div>
        </div>
      </div>

      <div class="enterprise-features">
        <h3 class="features-title">Beneficios Enterprise</h3>
        <ul class="features-list">
          <li><i class="pi pi-check"></i> Monitoreo de múltiples sucursales</li>
          <li><i class="pi pi-check"></i> Reportes ejecutivos mensuales</li>
          <li><i class="pi pi-check"></i> Soporte prioritario 24/7</li>
        </ul>
      </div>

      <div class="action-buttons">
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
  photo: '/images/company-user.png',
  username: 'Los Rofi',
  email: 'losrofi@enterprise.com',
  plan: 'ENTERPRISE',
  planDaysLeft: '1 year'
})

function deleteAccount() {
  alert(t('profile.account_deleted'))
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

.enterprise-badge {
  background: linear-gradient(135deg, #328e6e 0%, #547792 100%);
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
  width: 180px;
  height: 180px;
  border-radius: 24px;
  object-fit: cover;
  border: 4px solid #328e6e;
  box-shadow: 0 4px 12px rgba(50, 142, 110, 0.2);
}

.company-icon {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: #328e6e;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: 3px solid white;
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
  background-color: rgba(84, 119, 146, 0.1);
  border-left: 3px solid #547792;
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

.enterprise-features {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-left: 4px solid #547792;
}

.features-title {
  color: #547792;
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  padding: 0.5rem 0;
  color: #2c3e50;
  font-weight: 500;
}

.features-list i {
  color: #328e6e;
  margin-right: 0.5rem;
}

.action-buttons {
  display: flex;
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

  .enterprise-features {
    margin-top: 1rem;
  }
}
</style>