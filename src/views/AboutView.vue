<template>
<div class="about">
  <section class="intro">
  <div class="info_text_wrapper">
    <h3>Quality Pizza</h3>
    <p class="info">Nothing but the best Quality</p>
  </div>
  <img 
  class="info_img" 
  src="../assets/images/calzone.jpg" 
  alt="calzone close up">
  </section>
<section class="more_info_wrapper">
<h3>Click on the links below for more info</h3>
<nav>
  <ul>
    <RouterLink class="link" :to="{name: 'historyLink'}">Our History</RouterLink>
    <RouterLink class="link" :to="{name: 'deliveryLink'}">Delivery</RouterLink>
    <RouterLink class="link" :to="{name: 'locationsLink'}">Locations</RouterLink>
  </ul>
</nav>
<RouterView/>
</section>
</div>
</template>



<style>
.about{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro {
  display:flex;
  flex-direction: column;
}
.info_img, .info_text_wrapper{
flex:1;
padding:1rem;
text-align: center;
align-self: center;
}
.more_info_wrapper{
  display: flex;
  flex-direction: column;
  text-align: center;
  background: wheat;
  width: 100vw;
  padding: 1rem;
}
@media(min-width:900px){
  .intro{
    flex-direction: row;
  }
}
</style>