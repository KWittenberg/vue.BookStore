<script setup lang="ts">
import { filter, visibleColumns, columns, users, selected, showCreateUserDialog, createUserForm } from 'src/components/constUser'
import { getUsers, deleteUsers } from 'src/service/userApi'
import { getRoles } from 'src/service/roleApi'
import { roles, Role } from 'src/components/constRole'

const getRolesHandler = async () => {
  try {
    const data = await getRoles()
    roles.value = data;
  } catch (error) {
    console.error(error)
  }
}

const mapRoleIdsToNames = (roleIds: string[], roles: Role[]) => {
  return roleIds.map(roleId => {
    const role = roles.find(role => role.id === roleId);
    return role ? role.name : 'No role!';
  });
}

const getUserHandler = async () => {
  try {
    const data = await getUsers()
    users.value = data
    data.forEach(user => {
      user.roleNames = mapRoleIdsToNames(user.roleIds, roles.value);
    });
  } catch (error) {
    console.error(error)
  }
}

getRolesHandler()
getUserHandler()

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

const deleteUsersHandler = async () => {
  try {
    await deleteUsers(selected.value)
    selected.value.length = 0;
    getUserHandler()
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <q-page>
    <div class="q-pa-xl">
      <q-table v-model:selected="selected" ref="usersTable" title="Users" :rows="users" row-key="id" :columns="columns"
        :pagination="{
          sortBy: 'lastName',
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
            <q-btn v-if="selected.length === 0" round color="primary" icon="add" @click="showCreateUserDialog = true" />
            <q-btn v-else round color="primary" icon="delete" @click="deleteUsersHandler" />
          </div>
        </template>

        <template #body-cell-avatarUrl="props">
          <q-td :props="props">
            <img :src="props.row.avatarUrl" alt="Avatar" width="40" height="40">
          </q-td>
        </template>

        <template #body-cell-roleIds="props">
          <q-td :props="props">
            <q-chip class="text-white" color="primary">
              {{ props.row.roleNames.join(', ') }}
            </q-chip>
          </q-td>
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


  <!-- Create User Dialog -->
  <q-dialog v-model="showCreateUserDialog">
    <q-card class="full-width" style="max-width: 500px; min-height: 230px;">
      <q-card-section class="bg-primary">
        <q-toolbar>
          <q-toolbar-title class="text-white">Create User</q-toolbar-title>
          <q-btn v-close-popup flat round size="sm" icon="close"></q-btn>
        </q-toolbar>
      </q-card-section>
      <q-card-section>
        <q-input v-model="createUserForm.firstName" placeholder="   ... add First Name"
          @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.lastName" placeholder="   ... add Last Name" @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.dateOfBirth" placeholder="   ... add Date" @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.email" placeholder="   ... add Email" @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.phoneNumber" placeholder="   ... add Phone Number"
          @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.country" placeholder="   ... add Country" @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.postCode" placeholder="   ... add PostCode" @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.city" placeholder="   ... add City" @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.street" placeholder="   ... add Street" @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.roleIds" placeholder="   ... add Role" @keyup.enter="createUserHandler" />
        <q-input v-model="createUserForm.password" placeholder="   ... add Password" @keyup.enter="createUserHandler" />
      </q-card-section>
      <q-card-section class="text-right">
        <q-btn label="Save" color="primary" @click="createUserHandler" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>