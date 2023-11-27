<script setup lang="ts">

</script>

<template>
    <div class="left-side">
        <h1 id="greeting">Good Morning!</h1>
        <p id="weather">Retrieving weather information...</p>
        <div class="weather-group">
            <input type="radio" checked="true" id="celsius" name="temperature" />
            <label for="celsius">Celsius</label>
            <input type="radio" id="fahr" name="temperature" />
            <label for="fahr">Fahr</label>
        </div>
    </div>
</template>