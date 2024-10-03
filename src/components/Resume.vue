<template>
  <!-- original author: https://github.com/AleksandrHovhannisyan -->
  <div class="min-h-screen dark:bg-neutral-900">
    <header class="fixed inset-x-0 bottom-0 bg-neutral-800 sm:relative">
      <div class="mx-auto justify-between p-3 sm:flex sm:max-w-4xl sm:p-4">
        <!-- title -->
        <a href="#" class="hidden items-center gap-1 sm:flex">
          <img
            class="inline-block w-8 object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aGVhZHNob3R8ZW58MHwxfHx8MTY5MDI3MTY4Nnww&ixlib=rb-4.0.3&q=80&w=1080"
          />
          <span class="font-fira text-lg font-bold text-white">Aleksandr Hovhannisyan</span>
        </a>
      </div>
    </header>

    <article class="font-fira mx-auto max-w-3xl p-4 selection:bg-black selection:text-white">
      <h1 class="font-fira mb-8 text-4xl font-bold dark:text-white sm:mt-16">About Me</h1>

      <img
        class="float-right w-44 rounded-full border-4 border-gray-500"
        src="../assets/qwerty.jpg"
        alt="Profile Image"
      />

      <p class="text-lg dark:text-neutral-200">
        As a computer science student, I am passionate about technology and eager to expand my
        knowledge and skills. While I may not have formal work experience yet, I am dedicated to
        learning and applying my understanding of computer science principles. My educational
        background has provided me with a strong foundation in programming, algorithms, and software
        development. I am enthusiastic about exploring opportunities to gain practical experience
        and contribute to projects in meaningful ways
      </p>

      <!-- Work Experience -->
      <section class="mt-12">
        <h2 class="text-3xl font-bold dark:text-white">Work Experience</h2>
        <p class="mt-6 text-lg dark:text-neutral-200">
          I am a motivated and enthusiastic learner with a strong passion for software development.
          Though I am early in my career, I have gained hands-on experience working on personal
          coding projects, exploring web development, and improving my problem-solving skills
          through platforms like GitHub. I am excited to continue learning and contributing to
          meaningful projects." You can customize this to reflect your current skills and goals.
          This type of description emphasizes your willingness to learn and your engagement with
          relevant activities, which can be appealing to potential employers or collaborators.
        </p>
      </section>

      <!-- Software Projects -->
      <section class="mt-12">
        <h2 class="text-3xl font-bold mb-6">Software Projects</h2>

        <!-- Projects gallery -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <section
            v-for="(project, index) in projects"
            :key="index"
            class="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-gray-400/50 dark:hover:shadow-gray-800/50"
          >
            <header class="mb-4">
              <h3 class="text-lg font-bold dark:text-white">{{ project.title }}</h3>
            </header>
            <footer class="flex flex-wrap gap-2">
              <span
                v-for="(tech, techIndex) in project.techStack.split(',')"
                :key="techIndex"
                class="bg-gray-100 dark:bg-neutral-700 text-sm px-3 py-1 rounded-md shadow-inner dark:text-gray-50"
                >{{ tech.trim() }}</span
              >
            </footer>
          </section>
        </div>
      </section>

      <!-- Hobbies and interests -->
      <section class="mt-12">
        <h2 class="text-3xl font-bold dark:text-white">Hobbies and Interests</h2>
        <p class="mt-6 text-lg dark:text-neutral-200">
          In my free time, I love immersing myself in coding projects, constantly refining my skills
          and exploring new technologies. Whether it’s creating small applications or solving coding
          challenges, programming has become more than just a skill—it's a rewarding hobby. When I’m
          not coding, you’ll find me enjoying PC games, where strategy and quick thinking keep me
          engaged. I also like to stay active by playing basketball, which helps me unwind and
          maintain a balanced lifestyle.
        </p>
        <p class="mt-6 text-lg dark:text-neutral-200">
          I’m deeply interested in expanding my knowledge of coding, especially in areas like
          debugging and quality assurance. I find satisfaction in identifying and solving problems,
          which is why I’m particularly drawn to becoming a Quality Assurance debugger. I enjoy the
          process of refining code, ensuring it's efficient, and learning more about the intricacies
          of programming along the way. I’m committed to continuous learning and look forward to
          building a career in software development, with a focus on improving the reliability and
          quality of software.
        </p>
      </section>

      <!-- So yeah! -->
      <section class="mt-12">
        <h2 class="text-3xl font-bold dark:text-white">So, Yeah... That's Me!</h2>
        <p class="mt-6 text-lg dark:text-neutral-200">
          Anyway, this is probably a good place to stop. There’s more to my life than what I feel
          comfortable sharing here, but that’s about the gist of my background and interests. If you
          made it this far, cool! You’re still awake! Maybe we can chat sometime and get to know
          each other.
        </p>
        <p class="mt-6 text-lg dark:text-neutral-200">
          At the end of the day, I’m just a Real Human Bean who enjoys doing real human things. If
          that sounds like your cup of tea, get in touch—I’d love to hear from you!
        </p>
      </section>
    </article>

    <!-- Footer -->
    <section class="font-fira mt-10 bg-neutral-800 p-8 pb-20 sm:pb-8">
      <div class="mx-auto flex flex-col sm:max-w-4xl sm:flex-row sm:justify-between">
        <div class="flex flex-col items-center sm:items-start">
          <h3 class="text-2xl font-bold text-white">Thanks for reading!</h3>
          <p class="mt-2 text-neutral-200">© Aleksandr Hovhannisyan, 2019–Present</p>
          <p class="mt-2 text-sm text-neutral-200">
            Last built on Tuesday, October 4, 2022 at 10:28 PM UTC
          </p>
        </div>

        <!-- links -->
        <div class="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/Lemuel21"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:underline sm:text-lg"
            >GitHub</a
          >
          <a
            href="https://www.linkedin.com/in/john-lemuel-tapel-50237831b/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white hover:underline sm:text-lg"
            >LinkedIn</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProjectStore } from '@/stores/useProjectStore'

// Access the shared Pinia store
const projectStore = useProjectStore()
const projects = projectStore.projects
</script>

<style scoped>
/* Add your custom styles here */
</style>
