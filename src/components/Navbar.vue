<!-- components/Navbar.vue -->
<template>
  <header class="navbar">
    <div class="nav-content">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/admin">Admin</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* General Styles for Navbar */
header.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #42b983;
  padding: 0.5rem 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-content {
  display: flex;
  align-items: center;
}

.logo {
  max-width: 50px;
  height: auto;
  margin-right: 1rem;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid white;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
