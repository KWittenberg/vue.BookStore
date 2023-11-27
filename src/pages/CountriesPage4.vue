<script setup lang="ts">
import { ref } from 'vue';
//import { useQuery } from 'vue-query';
//import { useQuery } from 'vue-query';
import { findAll } from 'src/service/countryApi';
import { useQueryProvider } from 'vue-query';


//useQueryProvider('findAll', () => findAll());
//const { data } = useQueryProvider('findAll', findAll);

const selected = ref([])
const showCreateCountryDialog = ref(false);

const columns = [
  {
    name: 'id',
    label: 'Id',
    field: 'id',
    align: 'center',
  },
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    align: 'left',
    sortable: true,
  },
  // {
  //   name: 'action',
  //   label: 'Action',
  //   align: 'right',
  // }
];

const countries = ref([
  {
    name: ''
  }
])



//console.log(data.value)
</script>

<template>
  <q-page class="container">

    <ul>
      <li v-for="country in data" :key="country.id">{{ country.name }}</li>
    </ul>



    <div class="q-pa-md">
      <q-table v-model:selected="selected" ref="myTable" title="Countries" :rows="countries" :columns="columns"
        row-key="id" :pagination="{
          sortBy: 'name',
          rowsPerPage: 20
        }" selection="multiple" dense flat bordered>

        <template #top-right>
          <q-btn v-if="selected.length === 0" round color="primary" icon="add" @click="showCreateCountryDialog = true" />
          <q-btn v-else round color="primary" icon="delete" @click="deleteCountries(selected)" />
        </template>

        <!-- Dodana kolona s Delete btn
      <template #body="props">
        <q-tr :props="props">
          <q-td key="name"></q-td>
          <q-td key="name">{{ props.row.id }}</q-td>
          <q-td key="name">{{ props.row.name }}</q-td>
          <q-td key="name"><q-btn icon="delete" dense @click="deleteCountry(props.row.id)"></q-btn></q-td>
        </q-tr>
      </template> -->
      </q-table>
    </div>
    {{ selected }}
  </q-page>

  <!-- Create Country Dialog -->
  <q-dialog v-model="showCreateCountryDialog">
    <q-card class="full-width" style="max-width: 500px; min-height: 230px;">
      <q-card-section class="bg-primary">
        <q-toolbar>
          <q-toolbar-title class="text-white">Create Country</q-toolbar-title>
          <q-btn v-close-popup flat round size="sm" icon="close"></q-btn>
        </q-toolbar>
      </q-card-section>
      <q-card-section>
        <q-input v-model="createCountryForm.name" placeholder="   ... add country" @keyup.enter="createCountry" />
      </q-card-section>
      <q-card-section class="text-right">
        <q-btn label="Save" color="primary" @click="createCountry" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>


<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
}
</style>