<script>
import { defineComponent } from "vue";
import HamburgerMenu from "./HamburgerMenu.vue";

export default defineComponent({
  components: {
    HamburgerMenu,
  },
});
</script>

<template>
  <div class="navbar">
    <div class="container-fluid">
      <HamburgerMenu />
      <router-link to="/notification">○</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
