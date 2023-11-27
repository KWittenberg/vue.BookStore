<script setup lang="ts">
import products from 'src/data/products.js'
</script>

<template>
    <!-- <q-page> -->
    <!-- <q-card v-for="item in products" :key="item.id" style="max-width: 300px;">
            <q-img :src="item.imageSrc"></q-img>

            <h6 class="q-mb-none q-mt-sm q-ml-sm text-grey-5">{{ item.title }}</h6>
            <h7 class="q-mb-none q-mt-sm q-ml-sm text-grey-9">Author: {{ item.author }}</h7>

            <div class="q-pa-sm">
                <q-chip v-for="category in item.categories" :key="category.name" :color="category.color"
                    :label="category.name" />
            </div>
        </q-card> -->

    <!-- <div class="q-mb-md"> -->
    <div class="row justify-center items-start q-mb-md">

        <q-card v-for="item in products" :key="item.title" class="my-card q-mb-md q-mr-md"
            style="min-width: 290px; max-width: 290px;">
            <q-img :src="item.imageSrc"></q-img>

            <q-card-section>
                <q-btn fab color="primary" icon="euro" class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%);" />

                <div class="row no-wrap items-center">
                    <div class="col text-h6 ellipsis">{{ item.title }}</div>
                    <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                        <q-icon name="euro" />{{ item.price }}
                    </div>
                </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
                <div class="text-subtitle1">Author: {{ item.author }}</div>
                <div class="text-caption text-weight-thin text-grey">{{ item.shortDescription }}</div>
            </q-card-section>

            <!-- <div class="q-pa-sm">
                        <q-chip v-for="category in item.categories" :key="category.name" :color="category.color"
                            :label="category.name" />
                    </div> -->

        </q-card>
        <!-- </div>-->
    </div>
    <!-- </q-page> -->
</template>