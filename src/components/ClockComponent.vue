<script setup lang="ts">
import { ref, onMounted } from 'vue';

const hours = ref('00');
const minutes = ref('00');
const seconds = ref('00');

const updateTime = () => {
    const localTime = new Date();
    hours.value = localTime.getHours().toString().padStart(2, '0');
    minutes.value = localTime.getMinutes().toString().padStart(2, '0');
    seconds.value = localTime.getSeconds().toString().padStart(2, '0');
};

onMounted(() => {
    setInterval(updateTime, 1000);
});
</script>

<template>
    <div class="right-side">
        <!-- <p>Local time:</p> -->
        <div class="local-time">
            <div class="time-holder">
                <span data-time="hours" class="time-number">{{ hours }}</span>
                <span class="time-letter">Hours</span>
            </div>
            <span class="time-divider">:</span>
            <div class="time-holder">
                <span data-time="minutes" class="time-number">{{ minutes }}</span>
                <span class="time-letter">mins</span>
            </div>
            <span class="time-divider">:</span>
            <div class="time-holder">
                <span data-time="seconds" class="time-number">{{ seconds }}</span>
                <span class="time-letter">secs</span>
            </div>
        </div>
    </div>
</template>