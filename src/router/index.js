import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import SinglePost from '../views/SinglePost.vue'
import NotFound from '../views/NotFound.vue'
import firebase from 'firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Signup',
    component: Signup,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/posts/:id',
    name: 'SinglePost',
    component: SinglePost,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Nav Guards
router.beforeEach((to, from, next) => {
  // Check for requriedAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // Check if not logged in
    if(!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
    else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if logged in
    if(firebase.auth().currentUser) {
      // Go to homepage
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
    else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
})

export default router