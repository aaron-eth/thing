import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Type from '../components/Type.vue'
import Meditation from '../components/Meditation.vue'
import Sound from '../components/Sound.vue'
import Duration from '../components/Duration.vue'
Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home',component: Home},
  {path: '/type', name: 'type', component: Type},
  {path: '/meditation', name: 'meditation', component: Meditation},
  {path: '/sound', name: 'sound', component: Sound},
  {path: '/duration', name: 'duration', component: Duration},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
