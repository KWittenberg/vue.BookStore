<script setup lang="ts">
import { ref } from 'vue'
import heroImages from 'src/data/heroImages.js'

const slide = ref(1)
const autoplay = ref(true)
</script>

<template>
    <q-carousel v-model="slide" animated navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
        transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">

        <!-- <q-carousel-slide :name="1" img-src="/public/gallery/image1.jpg" /> -->

        <q-carousel-slide v-for="image in heroImages" :key="image.id" :name="image.id" :img-src="image.src"
            :alt="image.alt" />

    </q-carousel>
</template>