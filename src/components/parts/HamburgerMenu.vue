<script>

</script>

<template>
  <div class="navbar-light">
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="navbar-toggler-icon"></i></button>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="list-group list-group-flush">
          <router-link to="/notification" class="list-group-item list-group-item-action">aaa</router-link>
          <router-link to="/notification" class="list-group-item list-group-item-action">aaa</router-link>
          <router-link to="/notification" class="list-group-item list-group-item-action">aaa</router-link>
          <router-link to="/notification" class="list-group-item list-group-item-action">aaa</router-link>
        </div>
        <div class="offcanvas-bottom d-flex">
          <div class="p-2">📷</div>
          <div class="p-2">🦢</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>