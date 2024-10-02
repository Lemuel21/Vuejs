<!-- Admin.vue -->
<script setup></script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Admin Dashboard</h1>
        <nav class="space-x-4">
          <a href="#" class="hover:text-gray-300">Profile</a>
          <a href="#" class="hover:text-gray-300">Logout</a>
        </nav>
      </div>
    </header>

    <!-- Main layout -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-700 text-white p-6 hidden md:block">
        <ul class="space-y-4">
          <li>
            <a href="#" class="block p-2 hover:bg-gray-600 rounded">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block p-2 hover:bg-gray-600 rounded">Users</a>
          </li>
          <li>
            <a href="#" class="block p-2 hover:bg-gray-600 rounded">Settings</a>
          </li>
          <li>
            <a href="#" class="block p-2 hover:bg-gray-600 rounded">Edit Content</a>
          </li>
        </ul>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 bg-gray-100 p-6"></main>
    </div>
  </div>
</template>
