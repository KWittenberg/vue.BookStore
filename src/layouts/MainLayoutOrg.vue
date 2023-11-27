<script setup lang="ts">
import { ref } from 'vue';
import { date, Dark } from 'quasar';
import { useQuasar } from 'quasar';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const quasar = useQuasar();
const darkMode = ref(false);

//console.log(Dark.isActive)
if (Dark.isActive) {
  darkMode.value = true;
}


// const darkQuery = '(prefers-color-scheme: dark)';
// const queryList = window.matchMedia(darkQuery);
// quasar.dark.set(queryList.matches);
// queryList.addEventListener('change', (event) => {
//   quasar.dark.set(event.matches);
// })

// if (queryList.matches) {
//   darkMode.value = true;
// }

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  quasar.dark.set(darkMode.value)
}

// const queryList = window.matchMedia(darkQuery);
// if (queryList.matches) {
//   quasar.dark.set(true);
//   darkMode.value = true;
// }

// queryList.addEventListener('change', (event) => {
//   if (event.matches) {
//     quasar.dark.set(true);
//   } else {
//     quasar.dark.set(false);
//   }
// })



const leftDrawerOpen = ref(false)
const timeStamp = Date.now()
const todaysDate = date.formatDate(timeStamp, 'dddd D. MMMM YYYY.')
const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Dashboard',
    caption: 'info',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Todo',
    caption: 'ToDo List',
    icon: 'add_to_photos',
    link: '#/todo'
  },
  {
    title: 'Categories',
    caption: 'Category Page',
    icon: 'folder',
    link: '#/categories'
  },
  {
    title: 'Products',
    caption: 'Products Page',
    icon: 'shopping_cart',
    link: '#/products'
  },
  {
    title: 'Test',
    caption: 'Test Page',
    icon: 'code',
    link: '#/test'
  },
  {
    title: 'New',
    caption: 'New Page',
    icon: 'app_registration',
    link: '#/new'
  },
  {
    title: 'Login',
    caption: 'Login Page',
    icon: 'login',
    link: '#/login'
  },
  {
    title: 'Users',
    caption: 'Users Page',
    icon: 'group',
    link: '#/users'
  },
  {
    title: 'Joke',
    caption: 'best jokes',
    icon: 'emoji_emotions',
    link: '#/joke'
  },
  {
    title: 'Countries',
    caption: 'Ccountry Page',
    icon: 'location_on',
    link: '#/countries'
  },
  {
    title: 'Cities',
    caption: 'City Page',
    icon: 'location_on',
    link: '#/cities'
  }
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>



<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar class="text-white" style="background-color: #3b3b3b;">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>No1</q-toolbar-title>

        <!-- <q-input borderless v-model="text" input-class="text-left" class="q-ml-md" label="Search ..">
          <template v-slot:prepend>
            <q-icon name="search"></q-icon>
          </template>
        </q-input> -->

        <q-space></q-space>
        <div>{{ todaysDate }}</div>
        <q-space></q-space>

        <!-- <q-separator vertical />
        <q-btn dense round flat icon="bell" class="q-mx-lg">
          <q-badge color="green" floating transparent>4</q-badge>
        </q-btn>
        <q-separator vertical /> -->
        <!-- <q-avatar class="q-ml-lg">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar> -->

        <q-btn flat round dense icon="apps" class="q-mr-xs" />

        <q-btn flat round dense icon="more_vert">
          <q-menu transition-show="flip-right" transition-hide="flip-left" class="text-right">
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>
                  <q-item-label>Admin</q-item-label>
                  <q-item-label caption>admin@gmail.com</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>{{ todaysDate }}</q-item-section>
              </q-item>
              <q-separator />
              <q-item class="bg-primary" clickable>
                <q-btn icon="logout" label="Logout" flat dense />
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>











      </q-toolbar>
    </q-header>


    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-img class="absolute-top"
        src="https://images.unsplash.com/photo-1560170505-43f55e57739d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="50px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">Admin</div>
          <!-- <div>admin@gmail.hr</div> -->
        </div>
      </q-img>

      <q-list style="margin-top: 150px">
        <q-item-label header>Dark Mode

          <q-btn round flat @click="toggleDarkMode" class="cursor-pointer">
            <q-toggle v-model="darkMode" checked-icon="check" class="no-pointer-events" />
          </q-btn>

          <q-checkbox v-model="darkMode" size="lg" checked-icon="nightlight" unchecked-icon="wb_sunny" />
          <!-- <input v-model="darkMode" type="checkbox" @click="toggleDarkMode" /> -->

          <!-- <q-btn color="white" text-color="black" label="Dark Mode" @click.stop="toggleDarkMode()">
            <q-checkbox v-model="darkMode" class="q-mr-sm no-pointer-events" />
            <div class="text-caption text-grey" style="">{{ darkMode }}</div>
            <q-space />
          </q-btn> -->



        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>