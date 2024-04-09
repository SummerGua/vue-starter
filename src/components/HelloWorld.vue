<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <p class="text-xl text-red-400">tailwindCSS availble</p>
</template>
