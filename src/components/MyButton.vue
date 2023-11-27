<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        default: 'No Text'
    }
})
const emit = defineEmits(['buttonClicked'])

const handleButtonClicked = () => {
    // Passing number '30' with click on button --> emit('buttonClicked', 30)
    emit('buttonClicked')
}
</script>

<template>
    <q-btn @click="handleButtonClicked" color="primary" :label="props.text" />


    <!-- Ne radi emit ako 2 buttona imaju isti emit -->
    <button @click="$emit('buttonClicked')">{{ props.text }}</button>
</template>