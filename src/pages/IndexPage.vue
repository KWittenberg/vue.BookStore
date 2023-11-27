<script setup lang="ts">
// import GreetingSection from 'src/components/GreetingSection.vue';
// import ClockComponent from 'src/components/ClockComponent.vue';
import CarouselHero from 'src/components/CarouselHero.vue';
// import ProductsFilter from 'src/components/ProductsFilter.vue';
// import ProductsItemsAstroFiction from 'src/components/ProductsItemsAstroFiction.vue';
import ProductsItems from 'src/components/ProductsItems.vue';
</script>

<template>
  <q-page>
    <section id="home" class="container greeting-section">
      <!-- <GreetingSection />
      <ClockComponent /> -->
    </section>

    <CarouselHero />

    <!-- <section id="products" class="container products-section">
      <ProductsFilter />
       <ProductsItemsAstroFiction /> 
    </section>-->

    <ProductsItems />

  </q-page>
</template>