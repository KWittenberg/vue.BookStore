<script setup lang="ts">
import { ref } from 'vue';

const data = ref([
  {
    role: 'user',
    name: 'Antonio Banderas',
    email: 'antonio.banderas@gmail.com'
  },
  {
    role: 'user',
    name: 'Tom H',
    email: 'tom.h@gmail.com'
  },
  {
    role: 'admin',
    name: 'Arnold S',
    email: 'arnold.s@gmail.com'
  },
  {
    role: 'user',
    name: 'Clint E',
    email: 'clint.e@gmail.com'
  }
])

const columns = [
  {
    field: 'role',
    name: 'role',
    align: 'left',
    label: 'Role'
  },
  {
    field: 'name',
    name: 'name',
    align: 'left',
    label: 'Name'
  },
  {
    field: 'email',
    name: 'email',
    align: 'center',
    label: 'Email'
  }
]

const showDialog = ref(false);
const createUserForm = ref({
  name: '',
  email: ''
})

function createUser() {
  data.value.push({
    name: createUserForm.value.name,
    role: 'user',
    email: createUserForm.value.email
  })
  createUserForm.value.name = ''
  createUserForm.value.email = ''
  showDialog.value = false
}
</script>

<template>
  <q-page padding>
    <q-table :columns="columns" :rows="data">

      <template #top-right>
        <q-btn round color="primary" icon="add" @click="showDialog = true" />
      </template>

      <template #body-cell-role="props">
        <q-td :props="props">
          <q-chip class="text-white" color="primary">
            {{ props.row.role }}
          </q-chip>
        </q-td>
      </template>

      <template #body-cell-name="props">
        <q-td :props="props">
          <q-input v-model="props.row.name" color="primary" borderless dense />
        </q-td>
      </template>

      <!-- <template #body-cell-email="props">
        <q-td :props="props">
          <q-chip class="text-white" color="primary">
            {{ props.row.email }}
          </q-chip>
        </q-td>
      </template> -->
    </q-table>

    <q-dialog v-model="showDialog">
      <q-card class="full-width" style="max-width: 450px">
        <q-card-section>
          <q-toolbar>
            <q-toolbar-title>Create User</q-toolbar-title>
            <q-btn v-close-popup flat round size="sm" icon="close"></q-btn>
          </q-toolbar>
        </q-card-section>
        <q-card-section>
          <q-input v-model="createUserForm.name" class="q-mb-md" outlined label="name"></q-input>
          <q-input v-model="createUserForm.email" class="q-mb-md" outlined label="email"></q-input>
        </q-card-section>
        <q-btn class="full-width" label="Create" color="primary" @click="createUser" />
      </q-card>
    </q-dialog>

  </q-page>
</template>