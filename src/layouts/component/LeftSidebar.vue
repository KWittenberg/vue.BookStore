<script setup lang="ts">
import { Dark } from 'quasar'
import { darkMode, leftDrawerOpen, essentialLinks } from 'src/layouts/component/constLayout'
import { useQuasar } from 'quasar'
import EssentialLink from 'components/EssentialLink.vue'

const quasar = useQuasar()
const logo = 'src/assets/logoFactoryX.jpg'

if (Dark.isActive) {
    darkMode.value = true;
}

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    quasar.dark.set(darkMode.value)
}
</script>

<template>
    <q-drawer v-model="leftDrawerOpen" show-if-above :width="200">
        <q-img class=" absolute-top" :src="logo">
            <!-- <div class="absolute-bottom bg-transparent">
                <q-avatar size="50px" class="q-mb-sm">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <div class="text-weight-bold">Admin</div>
            </div> -->
        </q-img>

        <q-list style="margin-top: 100px">

            <q-item-label header>
                <q-btn round flat @click="toggleDarkMode" class="cursor-pointer">
                    <q-toggle v-model="darkMode" checked-icon="check" class="no-pointer-events" />
                </q-btn>
                Dark Mode
                <!-- <q-checkbox v-model="darkMode" size="lg" checked-icon="nightlight" unchecked-icon="wb_sunny" /> -->
            </q-item-label>


            <q-item clickable to="/">
                <q-item-section avatar>
                    <q-avatar icon="home"></q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Home</q-item-label>
                </q-item-section>
            </q-item>

            <q-item clickable>
                <q-item-section avatar>
                    <q-avatar icon="dashboard"></q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Dasboard</q-item-label>
                </q-item-section>
            </q-item>

            <q-expansion-item icon="shop" label="Shop" header-class="text-primary" group="mygroup">
                <q-list class="text-right">
                    <q-separator />
                    <q-item clickable to="/categories" dense>
                        <q-item-section>
                            <q-item-label>Categories</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable to="/products" dense>
                        <q-item-section>Products</q-item-section>
                    </q-item>
                </q-list>
            </q-expansion-item>

            <q-expansion-item icon="admin_panel_settings" label="Admin" header-class="text-primary" group="mygroup">
                <q-list class="text-right">
                    <q-separator />
                    <q-item clickable to="/roles" dense>
                        <q-item-section>
                            <q-item-label>Roles</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable to="/users" dense>
                        <q-item-section>Users</q-item-section>
                    </q-item>
                </q-list>
            </q-expansion-item>

            <q-expansion-item icon="local_library" label="GeoLocation" header-class="text-primary" group="mygroup">
                <q-list class="text-right">
                    <q-separator />
                    <q-item clickable to="/countries" dense>
                        <q-item-section>
                            <q-item-label>Countries</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable to="/cities" dense>
                        <q-item-section>Cities</q-item-section>
                    </q-item>
                </q-list>
            </q-expansion-item>


            <q-expansion-item icon="link" label="Links" header-class="text-primary" group="mygroup">
                <q-list class="text-right">
                    <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
                </q-list>
            </q-expansion-item>
        </q-list>
    </q-drawer>


    <!-- <q-drawer show-if-above :width="120" class="colorDrawer">
        <div class="flex flex-center column q-mt-sm q-mb-md">
            <q-icon name="fab fa-viadeo" class="text-orange" style="font-size: 3rem;" />
        </div>
        <q-btn icon="fas fa-tachometer-alt" label="DASHBOARD" padding="13px xs" stack color="grey-6" flat
            class="full-width"></q-btn>
        <q-btn icon="far fa-credit-card" label="ORDERS" padding="13px xs" stack color="grey-6" flat
            class="full-width"></q-btn>
        <q-btn icon="fas fa-user" label="COSTOMERS" padding="13px xs" stack color="grey-6" flat class="full-width"></q-btn>
        <q-btn icon="fas fa-cube" label="INVENTORY" padding="13px xs" stack color="blue" unelevated
            class="full-width"></q-btn>
        <q-btn icon="fas fa-shopping-cart" label="MARKETING" padding="13px xs" stack color="grey-6" flat
            class="full-width"></q-btn>
        <q-btn icon="fas fa-desktop" label="DESIGN" padding="13px xs" stack color="grey-6" flat class="full-width"></q-btn>
        <q-btn icon="fas fa-file-alt" label="REPORTS" padding="13px xs" stack color="grey-6" flat
            class="full-width"></q-btn>
        <q-btn icon="fas fa-cog" label="SETTINGS" padding="13px xs" stack color="grey-6" flat class="full-width"></q-btn>
    </q-drawer> -->
</template>