import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import WordCreateView from '../views/WordCreateView.vue'
import PersonalWordsView from '../views/PersonalWordsView.vue'
import store from '@/store'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/words',
    name: 'words',
    component: PersonalWordsView,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/word/create',
    name: 'wordCreate',
    component: WordCreateView,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: 'registration'})
    } else if(store.state.user.token && (to.name === 'login' || to.name === 'registration')){
        next({name: 'profile'})
    } else {
        next()
    }
})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})
router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router
