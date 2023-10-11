<script setup>
import NewPizza from '@/components/admin/NewPizza.vue'
import PizzasView from '../components/admin/PizzasView.vue';
import OrdersView from "@/components/admin/OrdersView.vue"
import useAuth from "@/composables/useAuth"
const {userData} = useAuth();

</script>
<template>
<!-- <div v-if="userData">
 -->  <p class="user_email">Welcome {{ userData?.email }}</p>
  <h3>Admin</h3>
 <NewPizza/>
 <div class="row">
 <PizzasView/>
</div>
<OrdersView/>
<!-- </div> -->
<!-- <p v-else class="warning_msg">You must be admin to view this area...</p> -->
</template>

<style scoped>
.row{
  display:flex;
  flex-direction: column;
}

.user_email, warning_msg {
  margin:1rem;
}

@media(min-width:900px){
  .row{
    flex-direction: row;
  }
}
</style>