<script setup lang="ts">
import HeaderToolbar from 'src/layouts/component/HeaderToolbar.vue'
import LeftSidebar from 'src/layouts/component/LeftSidebar.vue'
</script>


<template>
  <q-layout view="lHh Lpr lFf" class="layout-main-bg-image">
    <HeaderToolbar />
    <LeftSidebar />


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<style lang="scss" scoped>
.layout-main-bg-image {
  background-image: url('src/assets/hex.svg');
  background-repeat: no-repeat;
  background-position: center 0px;
  background-size: cover;
}
</style>