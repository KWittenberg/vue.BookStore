<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { getCountries, createCountryForm } from 'src/service/countryApi'
import { useQuasar } from 'quasar'

const quasar = useQuasar()
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

// const createCountryForm = ref({
//   name: ''
// })



// const getCountries = () => {
//   axios.get('https://localhost:44370/api/app/country/countries')
//     .then((response) => {
//       //console.log(response)
//       data.value = response.data;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

async function fetchData() {
  try {
    const data = await getCountries()
    countries.value = data
  } catch (error) {
    console.error(error)
  }
}

fetchData()

function createCountry() {
  axios.post('https://localhost:44370/api/app/country/country', {
    name: createCountryForm.value.name
  })
    .then(function (response) {
      //console.log(response.data);
      quasar.notify({
        position: 'top-right',
        type: 'positive',
        message: `${createCountryForm.value.name} country created!`
      })
      createCountryForm.value.name = '';
      showCreateCountryDialog.value = false;
      fetchData()
    })
    .catch(function (error) {
      console.log(error);
    });
}

const deleteCountry = (countryId: string) => {
  //console.log(countryId)
  axios.delete(`https://localhost:44370/api/app/country/${countryId}/country`)
    .then(() => {
      getCountries();
    })
    .catch((error) => {
      console.error(error);
    });
}

// const deleteCountries = async (selected) => {
//   console.log(selected);

//   selected.forEach((country) => {
//     await axios.delete(`https://localhost:44370/api/app/country/${country.id}/country`)
//       .then(() => {
//         getCountries();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   });
// };

const deleteCountries = async (selected) => {
  // quasar.dialog({
  //   title: 'Confirm',
  //   message: 'Really delete?',
  //   cancel: true,
  //   persistent: true
  // }).onOk (() => {
  for (const country of selected) {
    try {
      await axios.delete(`https://localhost:44370/api/app/country/${country.id}/country`);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData()
  selected.length = 0;
  quasar.notify({
    position: 'top-right',
    type: 'positive',
    message: 'Country deleted!'
  })
  // })
};
</script>

<template>
  <q-page class="container">
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