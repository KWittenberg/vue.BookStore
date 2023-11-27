<script setup lang="ts">
import { ref } from 'vue';
import MyButton from 'src/components/MyButton.vue'

const name = ref('Lovro')
const age = ref(11)

const handleHeadingClick = () => {
  name.value = 'NewName',
    age.value = 20
}

const showAlert = () => {
  alert('Child button was clicked!')
}

// Passing number with button
// const showAlert = newAge => {
//   age.value = newAge
// }

</script>

<template>
  <h4 @click="handleHeadingClick">My son is {{ name }}, and have {{ age }} years.</h4>

  <MyButton @buttonClicked="showAlert" text="MyButton" />
</template>