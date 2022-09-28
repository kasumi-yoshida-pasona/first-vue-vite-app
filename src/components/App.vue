<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './mixin/Header.vue';
import FooterNav from './mixin/FooterNav.vue';
</script>

<template>
  <Header />
  <router-view />
  <FooterNav />
</template>

<style scoped>

</style>
