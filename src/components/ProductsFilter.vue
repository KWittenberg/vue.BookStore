<script setup lang="ts">

</script>

<template>
    <div class="products-filter">
        <input type="radio" checked="true" id="all" name="products" />
        <label for="all">
            All
            <span class="product-amount">3</span>
        </label>
        <input type="radio" id="paid" name="products" />
        <label for="paid">
            Paid
            <span class="product-amount">2</span>
        </label>
        <input type="radio" id="free" name="products" />
        <label for="free">
            Free
            <span class="product-amount">1</span>
        </label>

        <span class="glider"></span>
    </div>
</template>