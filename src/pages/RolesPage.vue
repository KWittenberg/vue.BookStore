<script setup lang="ts">
import { filter, visibleColumns, columns, roles, selected, showCreateRoleDialog, createRoleForm } from 'src/components/constRole'
import { getRoles } from 'src/service/roleApi'
import { useQuasar } from 'quasar'

const quasar = useQuasar()

const getRolesHandler = async () => {
  try {
    const data = await getRoles()
    roles.value = data
  } catch (error) {
    console.error(error)
  }
}

getRolesHandler()

// const createCategoryHandler = async () => {
//   try {
//     await createCategory(createCategoryForm.value.name, createCategoryForm.value.description)
//     quasar.notify({
//       position: 'top',
//       type: 'positive',
//       message: `${createCategoryForm.value.name} category created!`
//     })
//     showCreateCategoryDialog.value = false;
//     createCategoryForm.value.name = '';
//     createCategoryForm.value.description = '';
//     getCategoriesHandler()
//   } catch (error) {
//     console.error(error)
//   }
// }

// const deleteCategoriesHandler = async () => {
//   try {
//     await deleteCategories(selected.value)
//     quasar.notify({
//       position: 'top',
//       type: 'positive',
//       message: 'Category deleted!'
//     })
//     selected.value.length = 0;
//     getCategoriesHandler()
//   } catch (error) {
//     console.error(error)
//   }
// }
</script>

<template>
  <q-page>
    <div class="q-pa-xl">
      <q-table v-model:selected="selected" ref="rolesTable" title="Roles" :rows="roles" row-key="id" :pagination="{
        sortBy: 'name',
        rowsPerPage: 20
      }" selection="multiple" :visible-columns="visibleColumns" :filter="filter" flat bordered>

        <template #top-right>
          <div class="q-mr-xl">
            <q-input v-model="filter" dense borderless debounce="300" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="q-mr-md">
            <q-select v-model="visibleColumns" borderless multiple dense options-dense
              :display-value="$q.lang.table.columns" emit-value map-options :options="columns" option-value="name"
              options-cover style="min-width: 100px" />
          </div>
          <div>
            <q-btn v-if="selected.length === 0" round color="primary" icon="add" @click="showCreateRoleDialog = true" />
            <q-btn v-else round color="primary" icon="delete" @click="deleteRolesHandler" />
          </div>
        </template>
        <template v-slot:no-data="{ icon, message }">
          <div class="full-width row flex-center text-accent q-gutter-sm">
            <q-icon size="5em" name="sentiment_dissatisfied" />
            <span>Well this is sad... {{ message }}</span>
            <q-icon size="5em" :name="filter ? 'filter_b_and_w' : icon" />
          </div>
        </template>
      </q-table>
    </div>
    <!-- <q-separator />
    {{ selected }} -->
  </q-page>

  <!-- Create Role Dialog -->
  <q-dialog v-model="showCreateRoleDialog">
    <q-card class="full-width" style="max-width: 500px; min-height: 230px;">
      <q-card-section class="bg-primary">
        <q-toolbar>
          <q-toolbar-title class="text-white">Create Role</q-toolbar-title>
          <q-btn v-close-popup flat round size="sm" icon="close"></q-btn>
        </q-toolbar>
      </q-card-section>
      <q-card-section>
        <q-input v-model="createRoleForm.name" placeholder="   ... add role" @keyup.enter="createRoleHandler" />
      </q-card-section>
      <q-card-section class="text-right">
        <q-btn label="Save" color="primary" @click="createRoleHandler" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>