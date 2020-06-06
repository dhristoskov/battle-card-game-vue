import Vue from 'vue'
import VueRouter from 'vue-router'
import BattlePage from '../BattlePage/BattlePage'
import CharCreation from '../CharCreation/CharCreation'

Vue.use(VueRouter)

const routes = [

  { path: '/', name: 'Home', component: CharCreation },
  { path: '/battle/:type', name: 'Battle', component: BattlePage }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
