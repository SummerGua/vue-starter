<script setup lang="ts">
withDefaults(defineProps<{ msg: string }>(), { msg: 'Hello World' });
</script>

<template>
  <h1>{{ msg }}</h1>
  <p class="text-xl text-red-400">tailwindCSS availble</p>
</template>
