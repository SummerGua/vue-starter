<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import LinkBar from '@/components/LinkBar.vue';
import { TreeForm } from '@/components/TreeForm/index';
</script>

<template>
  <div
    class="flex flex-col justify-center bg-white dark:bg-[#121212] min-h-[100vh]"
  >
    <h1 class="self-center text-3xl mb-8 text-black dark:text-white">
      Evuething
    </h1>
    <link-bar></link-bar>
    <router-view class="m-4" />
    <the-footer></the-footer>
    <tree-form class="self-center mt-8"></tree-form>
  </div>
</template>
