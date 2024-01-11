import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import ShoppingCartView from '@/views/ShoppingCartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // for product page
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },

    // for ShoppingCart page
    {
      path: '/cart',
      name: 'cart',
      component: ShoppingCartView
    }
    
  ]
})

export default router
