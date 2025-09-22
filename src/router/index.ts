import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomePage from '@/views/Home/HomePage.vue'
import MapPage from '@/views/Map/MapPage.vue'
import PropertyPage from '@/views/Property/PropertyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', name: 'home', component: HomePage },
        { path: 'map', name: 'map', component: MapPage },
        { path: 'property/:id', name: 'property', component: PropertyPage },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const restrictedRoutes = ['map', 'property']

  if (!from.name && restrictedRoutes.includes(to.name as string)) {
    return next({ name: 'home' })
  }

  next()
})

export default router
