<script setup lang="ts">
</script>


<template>
  <q-layout class="layout-user-container">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="flex items-center justify-between footer custom-page-bg">
      <div>
        <span>© 2023 Company</span>
        <span class="q-ml-sm">Created by Factory X</span>
      </div>
    </q-footer>

  </q-layout>
</template>


<style lang="scss" scoped>
.layout-user-container {
  background-image: url('src/assets/hex.svg');
  background-repeat: no-repeat;
  background-position: center 0px;
  background-size: cover;
}

.footer {
  font-size: 10px;
  letter-spacing: .3px;
  padding: 15px 25px;
  text-transform: uppercase;
}
</style>