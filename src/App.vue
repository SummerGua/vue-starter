<script setup lang="ts"></script>

<template>
  <div class="w-full flex justify-around text-blue bg-[#f5f5f5]">
    <router-link to="/"> to HOME </router-link>
    <router-link to="/about"> to ABOUT </router-link>
  </div>
  <router-view />
</template>
