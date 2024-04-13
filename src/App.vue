<script setup lang="ts">
import { Home, DarkMode, MoreOne, GithubOne } from '@icon-park/vue-next';

const toggleDark = () => {
  document.documentElement.classList.toggle('dark');
};
</script>

<template>
  <div
    class="flex flex-col justify-center bg-white dark:bg-[#121212] min-h-[100vh]"
  >
    <div class="flex gap-4 justify-center p-2">
      <router-link to="/">
        <span
          class="flex gap-2 border-2 dark:text-gray-300 border-black dark:border-gray-300 p-2 hover:bg-gray-400"
        >
          HOME<home size="24" theme="filled" />
        </span>
      </router-link>
      <router-link to="/about">
        <span
          class="flex gap-1 border-2 dark:text-gray-300 border-black dark:border-gray-300 p-2 hover:bg-gray-400"
        >
          ABOUT
          <more-one theme="outline" size="24" fill="#333" />
        </span>
      </router-link>
    </div>
    <router-view class="m-4" />
    <div class="flex gap-4 justify-center hover:cursor-pointer">
      <dark-mode
        class="text-[#333] hover:text-gray-400 dark:text-white"
        theme="outline"
        size="30"
        @click="toggleDark()"
      />
      <a
        class="text-[#333] hover:text-gray-300 dark:text-white"
        target="_blank"
        href="https://github.com/summergua/vue-starter"
      >
        <github-one theme="outline" size="30" />
      </a>
    </div>
  </div>
</template>
