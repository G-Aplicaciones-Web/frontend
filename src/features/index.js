import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../features/home/HomePage.vue'
import DevicesPage from '../features/devices/DevicesPage.vue'
import CompanyProfile from '../features/profiles/company/CompanyProfile.vue'
import TechnicianProfile from '../features/profiles/technician/TechnicianProfile.vue'

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/devices', name: 'devices', component: DevicesPage },
    { path: '/profile/company', name: 'company-profile', component: CompanyProfile },
    { path: '/profile/technician', name: 'technician-profile', component: TechnicianProfile }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router