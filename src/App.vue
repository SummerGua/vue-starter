<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import LinkBar from '@/components/LinkBar.vue';
</script>

<template>
  <div
    class="flex flex-col justify-center bg-white dark:bg-[#121212] min-h-[100vh]"
  >
    <link-bar></link-bar>
    <router-view class="m-4" />
    <the-footer></the-footer>
  </div>
</template>
