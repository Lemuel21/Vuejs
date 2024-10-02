<!-- Admin.vue -->
<script setup>
import { ref } from 'vue'

// Information of all pages that can be edited
const pages = ref({
  Home: {
    title: 'Home',
    description: 'Welcome to the Home page. This is where your journey starts.'
  },
  Dashboard: {
    title: 'Dashboard',
    description: 'Welcome to the dashboard, where you can manage all your main controls.'
  },
  Users: {
    title: 'Users',
    description: 'Manage users and their permissions here.'
  },
  Settings: {
    title: 'Settings',
    description: 'Modify application settings and configurations here.'
  },
  Resume: {
    title: 'Resume',
    description: 'This is your Resume page. Add or modify your resume content here.'
  },
  Contact: {
    title: 'Contact',
    description: 'Reach out to us through the contact page.'
  }
})

const selectedPage = ref(null) // To track the currently selected page
const newPage = ref({ title: '', description: '' }) // Data for creating a new page

// Function to update the selected page for viewing/editing
const selectPage = (page) => {
  selectedPage.value = page
}

// Function to add a new page
const addPage = () => {
  if (newPage.value.title && newPage.value.description) {
    pages.value[newPage.value.title] = { ...newPage.value }
    newPage.value = { title: '', description: '' } // Reset new page data after creation
  }
}

// Function to delete a page
const deletePage = (pageKey) => {
  delete pages.value[pageKey]
  if (selectedPage.value === pageKey) {
    selectedPage.value = null // Unselect the deleted page if it was selected
  }
}
</script>

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
          <li v-for="(page, key) in pages" :key="key">
            <a href="#" class="block p-2 hover:bg-gray-600 rounded" @click="selectPage(key)">{{
              key
            }}</a>
          </li>
        </ul>
        <button
          class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          @click="selectPage(null)"
        >
          Create New Page
        </button>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 bg-gray-100 p-6">
        <!-- CRUD: Create a new page -->
        <div v-if="!selectedPage" class="bg-white shadow-md rounded-lg p-4">
          <h2 class="text-2xl font-semibold mb-4">Create a New Page</h2>

          <div>
            <label class="block text-sm font-medium text-gray-700">Page Title</label>
            <input
              v-model="newPage.title"
              type="text"
              class="mt-1 p-2 block w-full border rounded"
              placeholder="Enter page title"
            />

            <label class="block text-sm font-medium text-gray-700 mt-4">Page Description</label>
            <textarea
              v-model="newPage.description"
              class="mt-1 p-2 block w-full border rounded"
              rows="3"
              placeholder="Enter page description"
            ></textarea>

            <button
              class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              @click="addPage"
            >
              Add Page
            </button>
          </div>
        </div>

        <!-- CRUD: Read & Update selected page -->
        <div v-if="selectedPage" class="bg-white shadow-md rounded-lg p-4">
          <h2 class="text-2xl font-semibold mb-4">{{ selectedPage }}</h2>

          <div>
            <label class="block text-sm font-medium text-gray-700">{{ selectedPage }} Title</label>
            <input
              v-model="pages[selectedPage].title"
              type="text"
              class="mt-1 p-2 block w-full border rounded"
            />

            <label class="block text-sm font-medium text-gray-700 mt-4"
              >{{ selectedPage }} Description</label
            >
            <textarea
              v-model="pages[selectedPage].description"
              class="mt-1 p-2 block w-full border rounded"
              rows="3"
            ></textarea>

            <!-- Delete Page button -->
            <button
              class="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              @click="deletePage(selectedPage)"
            >
              Delete Page
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
