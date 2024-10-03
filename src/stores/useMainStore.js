// import { defineStore } from 'pinia'

// export const useMainStore = defineStore('main', {
//   state: () => ({
//     profile: {
//       name: '',
//       about: '',
//       image: '',
//       workExperience: [],
//       projects: [],
//       hobbies: ''
//     }
//   }),
//   actions: {
//     updateProfile(updatedProfile) {
//       this.profile = { ...updatedProfile }
//     },
//     updateWorkExperience(index, updatedExperience) {
//       this.profile.workExperience[index] = updatedExperience
//     },
//     addWorkExperience(newExperience) {
//       this.profile.workExperience.push(newExperience)
//     },
//     deleteWorkExperience(index) {
//       this.profile.workExperience.splice(index, 1)
//     },
//     updateProject(index, updatedProject) {
//       this.profile.projects[index] = updatedProject
//     },
//     addProject(newProject) {
//       this.profile.projects.push(newProject)
//     },
//     deleteProject(index) {
//       this.profile.projects.splice(index, 1)
//     },
//     updateHobbies(hobbies) {
//       this.profile.hobbies = hobbies
//     }
//   }
// })
