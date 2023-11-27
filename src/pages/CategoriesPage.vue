<script setup lang="ts">
import { filter, visibleColumns, columns, categories, selected, showCategoryDialog, positionCategoryDialog, categoryForm } from 'src/components/constCategory'
import { getCategories, createCategory, updateCategory, deleteCategories } from 'src/service/categoryApi'
import { getRandomImage } from 'src/service/utils'

const getCategoriesHandler = async () => {
  try {
    const data = await getCategories()
    categories.value = data
  } catch (error) {
    console.error(error)
  }
}

getCategoriesHandler()

const openCreateCategoryDialog = async () => {
  categoryForm.value = {
    id: '',
    name: '',
    description: ''
  };
  showCategoryDialog.value = true;
}

const openUpdateCategoryDialog = async () => {
  categoryForm.value = selected.value[0]
  showCategoryDialog.value = true;
}

const saveCategoryHandler = async () => {
  if (categoryForm.value.id) {
    try {
      await updateCategory(categoryForm.value)
      showCategoryDialog.value = false;
      categoryForm.value = {
        id: '',
        name: '',
        description: ''
      };
      getCategoriesHandler()
    } catch (error) {
      console.error(error)
    }

  } else {
    try {
      await createCategory(categoryForm.value)
      showCategoryDialog.value = false;
      categoryForm.value = {
        id: '',
        name: '',
        description: ''
      };
      getCategoriesHandler()
    } catch (error) {
      console.error(error)
    }
  }
};

// const deleteCategoriesHandlerAsk = async () => {
//   quasar.dialog({
//     title: 'Confirm',
//     message: 'Really delete?',
//     cancel: true,
//     persistent: true
//   }).onOk(() => {
//     deleteCategoriesHandler()
//   })
// }

const deleteCategoriesHandler = async () => {
  try {
    await deleteCategories(selected.value)
    selected.value.length = 0;
    getCategoriesHandler()
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <q-page>
    <div class="q-pa-xl">
      <q-table v-model:selected="selected" ref="categoriesTable" title="Categories" :rows="categories" row-key="id"
        :pagination="{
          sortBy: 'name',
          rowsPerPage: 20
        }" selection="multiple" :visible-columns="visibleColumns" :filter="filter" flat bordered :columns="columns">

        <!-- table-header-class="bg-dark" table-class="bg-blue-grey-10" -->

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
            <q-btn v-if="selected.length === 0" round color="primary" size="xs" icon="add"
              @click="openCreateCategoryDialog" />
            <q-btn v-if="selected.length === 1" round color="primary" size="xs" icon="edit"
              @click="openUpdateCategoryDialog" />
            <q-btn v-if="selected.length > 0" round color="primary" size="xs" icon="delete"
              @click="deleteCategoriesHandler" />
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

  <!-- Category Dialog -->
  <q-dialog v-model="showCategoryDialog" position="top">
    <q-card class="full-width shadow-3" style="margin-top: 150px; max-width: 500px;">

      <q-card-section horizontal>
        <q-img class="col-2" :src="getRandomImage()" style="opacity: 75%;">
          <!-- <div class="absolute-bottom-left text-subtitle2 text-center">Factory X</div> -->
        </q-img>

        <q-card-section class="col-10 q-mt-xs q-px-xl q-py-md">
          <q-item>
            <div class="text-h5 text-primary">
              {{ categoryForm.id ? 'Edit Category' : 'Create Category' }}
            </div>
            <q-btn class="absolute-right" flat round color="primary" icon="highlight_off"
              @click="showCategoryDialog = false" />
          </q-item>

          <div class="q-mt-lg">
            <q-input v-model.trim="categoryForm.name" class="q-mb-md" no-error-icon placeholder=" name" rounded outlined
              dense @keyup.enter="saveCategoryHandler" />
            <q-input v-model.trim="categoryForm.description" class="q-mb-md" no-error-icon placeholder=" description"
              rounded outlined dense @keyup.enter="saveCategoryHandler" />

            <div class="q-mt-lg q-mb-sm column items-center">
              <q-btn label="Save" type="submit" style="background-color:#FF813C;" class="full-width"
                @click="saveCategoryHandler" />
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>