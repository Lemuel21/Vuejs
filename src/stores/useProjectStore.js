// stores/useProjectStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('projectStore', () => {
  const projects = ref([
    { title: 'Soda Report for the Year 2022', techStack: 'PowerBi' },
    { title: 'This Website!', techStack: 'Vuejs, Tailwind, css' },
    { title: 'Decorator Pattern', techStack: 'Java, Object-Oriented' },
    { title: 'Builder Pattern', techStack: 'Java, Object-Oriented' },
    { title: 'Solid Principle', techStack: 'Java, Object-Oriented' }
  ])

  // Add a new project
  const addProject = (newProject) => {
    projects.value.push({ ...newProject })
  }

  // Update an existing project
  const updateProject = (index, updatedProject) => {
    projects.value[index] = { ...updatedProject }
  }

  // Delete a project
  const deleteProject = (index) => {
    projects.value.splice(index, 1)
  }

  return {
    projects,
    addProject,
    updateProject,
    deleteProject
  }
})
