<script setup lang="ts">
import productsAstroFiction from 'src/data/productsAstroFiction.js'

</script>

<template>
    <div class="products-area">
        <div v-for="item in productsAstroFiction" :key="item.title" class="product-item">
            <img :src="item.image" alt="AstroFiction">
            <div class="product-details">
                <h3 class="product-title">{{ item.title }}</h3>
                <p class="product-author">{{ item.author }}</p>
                <p class="price-title">Price</p>
                <p class="product-price">€ {{ item.price }}</p>
            </div>
        </div>



        <!-- <div class="product-item">
            <img src="/products/img1.png" alt="Space Odissey">
            <div class="product-details">
                <h3 class="product-title">Space Odissey</h3>
                <p class="product-author">Marie Anne</p>
                <p class="price-title">Price</p>
                <p class="product-price">$ 35.00</p>
            </div>
        </div>
        <div class="product-item">
            <img src="/products/img2.png" alt="Doomed City">
            <div class="product-details">
                <h3 class="product-title">Doomed City</h3>
                <p class="product-author">Jason Cobert</p>
                <p class="price-title">Price</p>
                <p class="product-price">Free</p>
            </div>
        </div> -->

    </div>



    <!-- <div class="row justify-center items-start q-mb-md">
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
                <div class="text-caption text-weight-thin text-grey"><b>Category:</b> {{ item.bookCategory }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="text-subtitle1">Author: {{ item.author }}</div>
            </q-card-section>
        </q-card>
    </div> -->
</template>