<script setup>
import SignIn from "./SignIn.vue"
</script>

<template>
<header>
  <SignIn />
  <h1 class="site_title">
    <RouterLink :to="{ name: 'home'}">- Pizza Planet -</RouterLink>
  </h1>
    <nav>
    <RouterLink :to="{ name: 'home'}">- Home -</RouterLink>
    <RouterLink :to="{ name: 'menuLink'}">- Menu -</RouterLink>
    <RouterLink :to="{ name: 'aboutLink'}">- About -</RouterLink>
    <RouterLink :to="{ name: 'adminLink'}">- Admin -</RouterLink>
  </nav>
<h2>The #1 Place </h2>
</header>
</template>
<style scoped>
.site_title{
  font-size:3.6rem;
  color:aliceblue;
  transform:rotate(-8deg);
  margin-bottom:2rem;
}
header{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  color: aliceblue;
  background: url("../assets/images/main-bg.jpg") no-repeat;
  height: 650px;
  background-size: cover;
  background-position: center;
  text-shadow: 1px 1px 3px rgb(20,20,20);
}
h2{
  margin: 2rem 0;
  color: antiquewhite;
  font-size: 2rem;
  
}
</style>