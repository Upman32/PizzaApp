import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AdminView from '../views/AdminView.vue'
import AboutView from '../views/AboutView.vue'
import Delivery from '../components/DeliveryItem.vue'
import History from '../components/HistoryItem.vue'
import Locations from '../components/LocationsItem.vue'
    
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        delivery: Delivery,
        history: History
      }
    },
    {
      path:'/menu',
      name:"menuLink",
      component: MenuView,
    },
    {
      path:"/admin",
      name:"adminLink",
      component:  AdminView,
    },
    {
      path: "/about",
      name:"aboutLink",
      component: AboutView,
      children:[
        {path: "history", name: "historyLink", component: History},
        {path: "locations", name: "locationsLink", component: Locations},
        {path: "delivery", name: "deliveryLink", component: Delivery},

      ]
    },
  ]
})

export default router
