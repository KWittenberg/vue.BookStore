<script setup lang="ts">
import { ref } from 'vue';

const pageTitle = ref('Shopping List App')

// const items = ref([
//   '10 Piva',
//   '2 Kobasice',
//   '2 Čevapi'
// ])

const itemsArray = ref([
  { id: 1, label: '10 Piva', purchased: false },
  { id: 2, label: '2 Kobasice', purchased: true },
  { id: 3, label: '2 Čevapi', purchased: false },
  { id: 4, label: '1 Smoki', purchased: false }
])

// const itemsObject = ref({
//   'item-1': { id: 1, label: '10 Piva' },
//   'item-2': { id: 2, label: '2 Kobasice' },
//   'item-3': { id: 3, label: '2 Čevapi' },
//   'item-4': { id: 4, label: '1 Smoki' }
// })

const newItem = ref('')
const newItemPriority = ref('low')
const newItemHighPriority = ref(false)

const editing = ref(false)

// Funkcija u Varijablu - moraš dodati u 'script' na string uvijek .value
const saveItem = () => {
  if (newItem.value.trim() !== '') {
    itemsArray.value.push({
      id: itemsArray.value.length + 1,
      label: newItem.value,
      purchased: false
    })
    newItem.value = ''
  }
}

const doEdit = (e: boolean) => {
  editing.value = e
  newItem.value = ''
}

const togglePurchased = (item) => {
  item.purchased = !item.purchased
}

</script>

<template>
  <q-page>
    <div class="header">
      <h3>{{ pageTitle }}</h3>
      <q-btn v-if="editing" @click="doEdit(false)" color="secondary" label="Cancel" />
      <q-btn v-else @click="doEdit(true)" color="primary" label="Add Item" />
    </div>

    <!-- <div class="add-item-form text-center">
      <input v-model.trim="newItem" v-on:keyup.enter="itemsArray.push({ id: itemsArray.length + 1, label: newItem })"
        type="text" placeholder="... add an item">
      <br /><br />
      <q-btn color="primary" label="Save Item"
        v-on:click="itemsArray.push({ id: itemsArray.length + 1, label: newItem })" />
    </div>
    <br /> -->


    <form class="add-item-form text-center" v-if="editing" @submit.prevent="saveItem">
      <!-- @submit.prevent="itemsArray.push({ id: itemsArray.length + 1, label: newItem })"> -->
      <input v-model.trim="newItem" type="text" placeholder="... add an item">
      <br /><br />
      <q-btn :disabled="newItem.length < 5" color="primary" label="Add Item" @click="saveItem" />
      <!-- <button class="btn btn-primary">Add Item</button> -->
    </form>
    <br />
    <p v-if="!itemsArray.length">Nothing on List!</p>
    <ul>
      <li v-for="item in itemsArray" @click="togglePurchased(item)" :key="item.id"
        :class="{ 'text-uppercase': item.purchased }">{{ item.label }}
      </li>
    </ul>
    <br />
    <!-- <ul>
      <li v-for="({ id, label }, index) in itemsObject" :key="id">{{ index }} {{ label }}</li>
    </ul> -->
    <br />


    <br />
    <br />
    Priority:
    <label>
      <input type="radio" v-model="newItemPriority" value="low">Low
    </label>
    <label>
      <input type="radio" v-model="newItemPriority" value="high">High
    </label>
    <br />
    {{ newItemPriority }}
    <br />
    <label>
      <input type="checkbox" v-model="newItemHighPriority">High Priority
    </label>
    <br />
    {{ newItemHighPriority }}
    <br />
    <br />
    <!-- Iz Form newItem u Link na neku stranicu -->
    <a v-bind:href="newItem">Dinamic Link</a>


  </q-page>
</template>