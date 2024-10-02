<!-- App.vue -->
<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue' // Import the Navbar component
</script>

<template>
  <Navbar />
  <!-- Use the Navbar component here -->
  <RouterView />
  <!-- View for rendering route components -->
</template>

<style scoped>
/* No need to have navbar-specific styles here anymore */
</style>
