<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const newTask = ref('')
const tasks = ref([
  {
    title: 'learn Vue 3 & Composition API',
    done: false
  },
  {
    title: 'learn TS - TypeScript',
    done: false
  },
  {
    title: 'learn Quasar framework',
    done: false
  },
  {
    title: 'learn make Todo app',
    done: false
  }
])

const addTask = () => {
  if (newTask.value.trim() !== '' && newTask.value.trim().length >= 5) {
    tasks.value.push({
      title: newTask.value,
      done: false
    })
    newTask.value = ''
  }
}

const deleteTask = (index: number) => {
  $q.dialog({
    title: 'Confirm',
    message: 'Really delete?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    tasks.value = tasks.value.slice(0, index).concat(tasks.value.slice(index + 1))
    //$q.notify('Task deleted!')
    $q.notify({
      position: 'top-right',
      //type: 'positive',
      icon: 'check',
      progress: true,
      color: 'brown',
      textColor: 'white',
      classes: 'glossy',
      message: 'Task deleted!'
    })
  })
}

</script>

<template>
  <q-page class="column">

    <!-- Add Tasks -->
    <div class="row q-pa-sm bg-primary">
      <q-input v-model.trim="newTask" @keyup.enter="addTask" class="col" bg-color="blue-grey-5" square filled
        placeholder="...add task" dense>
        <template v-slot:append>
          <q-btn :disabled="newTask.length < 5" @click="addTask" round dense flat icon="add" />
        </template>
      </q-input>
    </div>

    <!-- List -->
    <q-list class="bg-blue-grey-8" separator bordered>
      <q-item v-for="(task, index) in tasks" :key="task.title" @click="task.done = !task.done"
        class="{ 'done bg-blue-1' : task.done }" clickable v-ripple>

        <q-item-section avatar>
          <q-checkbox v-model="task.done" class="no-pointer-events" color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>

        <q-item-section v-if="task.done" side>
          <q-btn flat round dense color="grey-4" icon="delete" @click.stop="deleteTask(index)" />
        </q-item-section>
      </q-item>
    </q-list>

    <!-- No Tasks -->
    <div v-if="!tasks.length" class="no-tasks absolute-center">
      <q-icon name="check" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">
        No tasks !
      </div>
    </div>


  </q-page>
</template>

<style lang="scss">
.done {
  q-item__label {
    text-decoration: line-through;
    color: #bbb
  }
}

.no-tasks {
  opacity: 0.5;
}
</style>