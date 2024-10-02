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

        <!-- navigation right -->
        <div class="flex sm:gap-2">
          <a
            href="#"
            class="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:hidden sm:px-3"
            >Home</a
          >
          <a
            href="#"
            class="block flex-1 bg-neutral-700 py-2 text-center text-lg text-white sm:px-3"
            >About</a
          >
          <a
            href="#"
            class="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:px-3"
            >Art</a
          >
          <a
            href="#"
            class="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:px-3"
            >Blog</a
          >
        </div>
      </div>
    </header>

    <article class="font-fira mx-auto max-w-3xl p-4 selection:bg-black selection:text-white">
      <h1 class="font-fira mb-8 text-4xl font-bold dark:text-white sm:mt-16">About Me</h1>

      <img
        class="float-right w-44 rounded-full border-4 border-gray-500"
        src="../assets/mee.jpg"
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

      <!-- <p class="mt-10 text-lg dark:text-neutral-200">
        Speaking of last names, if mine hasn’t already betrayed me, I was originally born in
        Armenia, a beautiful country nestled between Europe, Asia, and a bunch of biblically old
        mountains. You can almost spot it on a world map if you squint hard enough.
      </p>

      <p class="mt-10 text-lg dark:text-neutral-200">
        Long story short, I moved to the U.S. when I was little and have lived in the states for
        most of my life. I currently reside in Florida, home to plenty of friendly gators, lovebugs
        whose carcasses will eat away at your car’s paint, and the infamous Florida Man.
      </p> -->

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
        <h2 class="text-3xl font-bold dark:text-white">Software Projects</h2>

        <!-- Projects gallery -->
        <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <section
            class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800"
          >
            <header class="flex items-center justify-between dark:text-gray-50">
              <h3 class="text-lg font-bold">Soda Report for the Year 2022</h3>
              <span></span>
            </header>

            <footer class="my-4 flex gap-1">
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >PowerBi</span
              >
            </footer>
          </section>

          <section
            class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800"
          >
            <header class="flex items-center justify-between dark:text-gray-50">
              <h3 class="text-lg font-bold">This Website!</h3>
              <span></span>
            </header>

            <footer class="my-4 flex gap-1">
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >Vuejs</span
              >
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >Tailwind</span
              >
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >css</span
              >
            </footer>
          </section>

          <section
            class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800"
          >
            <header class="flex items-center justify-between dark:text-gray-50">
              <h3 class="text-lg font-bold">Decorator Pattern</h3>
              <span></span>
            </header>
            <footer class="my-4 flex gap-1">
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >Java</span
              >
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >Object-Oriented</span
              >
            </footer>
          </section>

          <section
            class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800"
          >
            <header class="flex items-center justify-between dark:text-gray-50">
              <h3 class="text-lg font-bold">Builder Pattern</h3>
              <span></span>
            </header>
            <div class="mt-2 dark:text-gray-300"></div>

            <footer class="my-4 flex gap-1">
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >Java</span
              >
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >Object-Oriented</span
              >
            </footer>
          </section>

          <section
            class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800"
          >
            <header class="flex items-center justify-between dark:text-gray-50">
              <h3 class="text-lg font-bold">Solid Principle</h3>
              <span></span>
            </header>
            <div class="mt-2 dark:text-gray-300"></div>

            <footer class="my-4 flex gap-1">
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >Java</span
              >
              <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50"
                >Object-Oriented</span
              >
            </footer>
          </section>

          <section class="flex flex-col items-center justify-center">
            <header>
              <h3 class="text-xl font-bold dark:text-white">Want to see more of my work</h3>
              <h4 class="text-center text-lg dark:text-neutral-200">Check out my other repos:</h4>
            </header>
            <div class="mt-4">
              <a href="https://github.com/Lemuel21" target="_blank">
                <svg
                  class="h-12 text-black dark:text-white"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path
                    fill="currentColor"
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  ></path>
                </svg>
              </a>
            </div>
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
<script setup></script>
