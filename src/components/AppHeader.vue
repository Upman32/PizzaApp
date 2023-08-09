<template>
<header>
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
