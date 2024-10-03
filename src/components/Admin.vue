<template>
  <section class="mt-12">
    <h2 class="text-3xl font-bold dark:text-white">Software Projects</h2>

    <!-- Add New Project -->
    <div class="mt-6">
      <input v-model="newProject.title" placeholder="Project Title" class="input-small" />
      <input
        v-model="newProject.techStack"
        placeholder="Tech Stack (comma separated)"
        class="input-small"
      />
      <button
        @click="addProject"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-sm"
      >
        Add Project
      </button>
    </div>

    <!-- Projects gallery -->
    <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <section
        v-for="(project, index) in projects"
        :key="index"
        class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800"
      >
        <header class="flex items-center justify-between dark:text-gray-50">
          <h3 class="text-lg font-bold">{{ project.title }}</h3>
        </header>

        <footer class="my-4 flex gap-1">
          <span
            v-for="(tech, techIndex) in project.techStack.split(',')"
            :key="techIndex"
            class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
            >{{ tech.trim() }}</span
          >
        </footer>

        <!-- Edit & Delete buttons -->
        <div class="flex gap-2">
          <button
            @click="editProject(index)"
            class="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition duration-300 text-sm"
          >
            Edit
          </button>
          <button
            @click="deleteProject(index)"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 text-sm"
          >
            Delete
          </button>
        </div>

        <!-- Edit form for the project (shown only when editing this project) -->
        <div v-if="editingIndex === index" class="mt-4">
          <input
            v-model="editingProject.title"
            placeholder="Edit Project Title"
            class="input-small"
          />
          <input
            v-model="editingProject.techStack"
            placeholder="Edit Tech Stack"
            class="input-small"
          />

          <button
            @click="updateProject(index)"
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 text-sm"
          >
            Update
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useProjectStore } from '@/stores/useProjectStore'

const projectStore = useProjectStore()
const projects = projectStore.projects

// New Project
const newProject = ref({
  title: '',
  techStack: ''
})

// Editing project fields
const editingIndex = ref(null)
const editingProject = ref({})

// Add New Project
const addProject = () => {
  if (newProject.value.title && newProject.value.techStack) {
    projectStore.addProject(newProject.value)
    newProject.value = { title: '', techStack: '' } // Clear form
  }
}

// Edit Project
const editProject = (index) => {
  editingIndex.value = index
  editingProject.value = { ...projects[index] }
}

// Update Project
const updateProject = (index) => {
  projectStore.updateProject(index, editingProject.value)
  editingIndex.value = null // Close the edit form
  editingProject.value = {} // Clear editing form
}

// Delete Project
const deleteProject = (index) => {
  projectStore.deleteProject(index)
}
</script>

<style scoped>
.input-small {
  width: 150px;
  margin-right: 10px;
  padding: 5px;
}

.btn-small {
  padding: 5px 10px;
  margin: 5px;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
}
</style>
