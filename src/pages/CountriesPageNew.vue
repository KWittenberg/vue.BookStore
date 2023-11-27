<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
// import { useQuasar } from 'quasar'
import { getCountries } from 'src/components/countryApi'
import CreateCountryDialog from 'src/components/dialog/CreateCountryDialog.vue'

// const quasar = useQuasar()
const selected = ref([])
const countryId = ref('')
const showCreateCountryDialog = ref(true);

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

const data = ref([
  {
    name: ''
  }
])

const fetchData = async () => {
  try {
    const countries = await getCountries();
    data.value = countries;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData();
});

// function createCountry() {
//   axios.post('https://localhost:44370/api/app/country/country', {
//     name: createCountryForm.value.name
//   })
//     .then(function (response) {
//       //console.log(response);
//       quasar.notify({
//         position: 'top-right',
//         type: 'positive',
//         // icon: 'check',
//         // progress: true,
//         // color: 'brown',
//         // textColor: 'white',
//         // classes: 'glossy',
//         message: `Country ${createCountryForm.value.name} created!`
//       })
//       createCountryForm.value.name = '';
//       showCreateCountryDialog.value = false;
//       getCountries();
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

const deleteCountry = (countryId) => {
  //console.log(countryId)
  axios.delete(`https://localhost:44370/api/app/country/${countryId}/country`)
    .then(() => {
      getCountries();
    })
    .catch((error) => {
      console.error(error);
    });
}

const deleteCountries = (selected) => {
  console.log(selected)
  // axios.delete(`https://localhost:44370/api/app/country/${countryId}/country`)
  //   .then(() => {
  //     getCountries();
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
}
</script>

<template>
  <div class="q-pa-md">
    <q-table v-model:selected="selected" title="Countries" :rows="data" :columns="columns" row-key="id" :pagination="{
      sortBy: 'name',
      rowsPerPage: 20
    }" selection="multiple" dense flat bordered>

      <template #top-right>
        <q-btn round color="primary" icon="add" @click="showCreateCountryDialog = true" />
        <q-btn round color="primary" icon="delete" @click="deleteCountries(selected)" />
      </template>
    </q-table>
  </div>
  {{ selected }}

  <CreateCountryDialog :showCreateCountryDialog="showCreateCountryDialog" />
</template>