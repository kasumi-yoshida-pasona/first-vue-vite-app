<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './parts/Header.vue';
import FooterNav from './parts/FooterNav.vue';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
// export default {
//     setup() {
    const route = useRoute()

    onMounted(() => {
      console.log(route.query)
    })
//   }
// };
</script>

<template>
  <Header />
  <router-view />
  <FooterNav />
</template>

<style scoped>

</style>
