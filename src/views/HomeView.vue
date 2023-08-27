<script setup></script>

<template>
  <main class="hot">
    <div class="hot_text">
      <h3>Hot out the oven!</h3>
      <p class="hot_pizza_name">Vegeterian Hot Pizza</p>
      <p class="hot_pizza_description">
      Our signature vegeterian, but with a kick..  
      </p>
      <RouterLink :to="{ name: 'menuLink' }">Let's Order</RouterLink>
    </div>
<img src="../assets/images/fire.jpg" alt="pizza oven image" class="hot_img">
</main>
</template>
<style scoped>
.hot {
display: flex;
flex-direction: column;
}
.hot_img, .hot_text {
  flex:1;
  padding:2rem;
  text-align: center;
}
.hot_text h3 {
  color: #bb2118;

}
.hot_pizza_name{
  font-size:1.8rem;
}
.hot_pizza_description {
  font-style: italic;
  font-weight: 300;
}
@media(min-width: 900px){
  .hot {
    flex-direction: row;
    align-items: center;
  }
}
</style>