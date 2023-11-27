<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const jokeData = ref({
  id: '',
  type: '',
  setup: '',
  punchline: '',
  getJokeUrl: 'https://official-joke-api.appspot.com/jokes/random',
  imageSource: 'https://picsum.photos/600/350'
});

const getJoke = async () => {
  await axios.get(jokeData.value.getJokeUrl)
    .then((response) => {
      jokeData.value.id = response.data.id;
      jokeData.value.type = response.data.type;
      jokeData.value.setup = response.data.setup;
      jokeData.value.punchline = response.data.punchline;
    })
    .catch((error) => {
      console.error(error);
    });
}

// axios.get('https://official-joke-api.appspot.com/jokes/random', {
//     params: {
//       type: 'general', // Ako hoćeš vrstu šale
//     }
//   })
getJoke()
</script>

<template>
  <q-page class="text-center">
    <h4>Joke</h4>
    <div class="row justify-center items-start q-mb-md">
      <q-card class="full-width shadow-10" style="max-width: 550px;">
        <q-img :src="jokeData.imageSource" img-class="my-custom-image">
          <div class="absolute-center text-h4" style="min-width: 550px;">{{ jokeData.setup }}</div>
          <div class="absolute-bottom text-h5">{{ jokeData.punchline }}</div>
        </q-img>
        <div class="absolute-top-left text-subtitle2">
          <q-chip>
            <q-avatar color="grey-8" text-color="white">{{ jokeData.id }}</q-avatar> {{ jokeData.type }}
          </q-chip>
        </div>
      </q-card>
    </div>
    <q-btn padding="md" color="primary" round icon="360" @click="getJoke" />
  </q-page>
</template>

<style lang="scss">
.my-custom-image {
  filter: blur(1px)
}
</style>
<!-- filter: blur(1px) sepia() // Možeš dodati za sepia -->