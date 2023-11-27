<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import { getCountries } from 'src/components/countryApi'
import axios from 'axios';
import { useQuasar } from 'quasar'

const quasar = useQuasar()
const props = defineProps({
    showCreateCountryDialog: Boolean,
});

const emit = defineEmits(['update']);
const { showCreateCountryDialog } = props;
//const showCreateCountryDialog = ref(false);

const createCountryForm = ref({
    name: ''
})

function createCountry() {
    axios.post('https://localhost:44370/api/app/country/country', {
        name: createCountryForm.value.name
    })
        .then(function (response) {
            //console.log(response);
            quasar.notify({
                position: 'top-right',
                type: 'positive',
                // icon: 'check',
                // progress: true,
                // color: 'brown',
                // textColor: 'white',
                // classes: 'glossy',
                message: `Country ${createCountryForm.value.name} created!`
            })
            createCountryForm.value.name = '';
            emit('update', false);
            getCountries();
        })
        .catch(function (error) {
            console.log(error);
        });
}
</script>

<template>
    <q-dialog :model-value="showCreateCountryDialog">
        <q-card class="full-width" style="max-width: 450px">
            <q-card-section>
                <q-toolbar>
                    <q-toolbar-title>Create Country</q-toolbar-title>
                    <q-btn v-close-popup flat round size="sm" icon="close"></q-btn>
                </q-toolbar>
            </q-card-section>
            <q-card-section>
                <q-input v-model="createCountryForm.name" class="q-mb-md" outlined label="name"></q-input>
            </q-card-section>
            <q-btn class="full-width" label="Create" color="primary" @click="createCountry" />
        </q-card>
    </q-dialog>
</template>