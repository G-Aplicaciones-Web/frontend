<template>
  <section class="profile-container">
    <h1>{{ $t('profile.technician_title') }}</h1>

    <div class="profile-info">
      <img :src="user.photo" alt="Profile photo" class="profile-photo" />
      <div class="details">
        <p><strong>{{ $t('profile.name') }}:</strong> {{ user.name }}</p>
        <p><strong>{{ $t('profile.username') }}:</strong> {{ user.username }}</p>
        <p><strong>{{ $t('profile.email') }}:</strong> {{ user.email }}</p>
        <p><strong>{{ $t('profile.plan') }}:</strong> {{ user.plan }}</p>
        <p><strong>{{ $t('profile.plan_days_left') }}:</strong> {{ user.planDaysLeft }}</p>
        <p><strong>{{ $t('profile.time_with_us') }}:</strong> {{ user.timeWithUs }}</p>
      </div>
    </div>

    <div class="buttons-container">
      <button class="btn delete-btn" @click="deleteAccount">
        {{ $t('profile.delete_account') }}
      </button>

      <button class="btn support-btn" @click="contactSupport">
        {{ $t('profile.contact_support') }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'


const { t } = useI18n()

const user = reactive({
  photo: '/images/profile/technician-user.png',
  name: 'John Doe',
  username: 'tech_john',
  email: 'john.doe@example.com',
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
  padding: 1.5rem 2rem;
  font-family: 'Poppins', sans-serif;
  max-width: 500px;
  margin: 0 auto;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--main-green);
}

.details p {
  margin: 0.3rem 0;
  font-weight: 600;
  color: #333;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
}

.delete-btn {
  background-color: var(--red-alert);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  width: 48%;
}

.delete-btn:hover {
  background-color: #b53038;
}

.support-btn {
  background-color: var(--main-green);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  width: 48%;
}

.support-btn:hover {
  background-color: #266a53;
}
</style>