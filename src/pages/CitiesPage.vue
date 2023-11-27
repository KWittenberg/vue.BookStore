<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const data = ref([]);
const selected = ref([])
const columns = [
  {
    name: 'id',
    label: 'Id',
    field: 'id',
    align: 'left',
  },
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    align: 'left',
    sortable: true,
  },
  {
    name: 'postCode',
    label: 'Post Code',
    field: 'postCode',
    align: 'left',
  },
  {
    name: 'longitude',
    label: 'Longitude',
    field: 'longitude',
    align: 'left',
  },
  {
    name: 'latitude',
    label: 'Latitude',
    field: 'latitude',
    align: 'left',
  },
];

const getCities = () => {
  axios.get('https://localhost:44370/api/app/country/cities')
    .then((response) => {
      console.log(response)
      data.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

getCities()
</script>

<template>
  <div class="q-pa-md">
    <q-table v-model:selected="selected" title="Cities" :rows="data" :columns="columns" row-key="id" :pagination="{
      sortBy: 'name',
      rowsPerPage: 20
    }" selection="multiple" dense flat bordered />
  </div>
</template>