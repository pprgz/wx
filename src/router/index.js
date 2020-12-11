import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home'
Vue.use( VueRouter )
const routes=[
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: () => import( '@/views/Home/search' )
  }, {
    path: '/detail',
    name: 'detail',
    component: () => import( '@/views/Home/detail' )
  },
  {
    path: '/Rec',
    name: 'Rec',
    component: () => import( '@/views/Rec' )
  },
  {
    path: '/cover',
    name: 'cover',
    component: () => import( '@/views/cover' )
  },
  {
    path: '/message',
    name: 'message',
    component: () => import( '@/views/message.vue' )
  },
  {
    path: '/person',
    name: 'person',
    component: () => import( '@/views/person' )
  }
]

const router=new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
} )

export default router
