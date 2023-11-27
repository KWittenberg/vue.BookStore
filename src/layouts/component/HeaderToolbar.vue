<script setup lang="ts">
import { leftDrawerOpen, todaysDate } from 'src/layouts/component/constLayout'
import { currentUser } from 'src/components/constUser';
// import { getCurrentUser } from 'src/service/userApi'

// const getCurrentUserHandler = async () => {
//     try {
//         const data = await getCurrentUser()
//         currentUser.value = data
//         console.log(currentUser.value)
//     } catch (error) {
//         //console.error(error)
//     }
// }

// getCurrentUserHandler()


const logoutCurrentUser = async () => {
    //currentUser.value = ref(null);
    console.log(currentUser)
}

const toggleLeftDrawer = async () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
    <q-header class="bg-blue-grey-9 headerCustomStyle">
        <q-toolbar>
            <q-btn size="xs" flat round dense icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
            <!-- <q-toolbar-title>No1</q-toolbar-title> -->
            <!-- <q-btn flat round dense icon="apps" class="q-mr-xs" /> -->

            <q-space />
            <q-btn v-if="currentUser === null" label="LOGIN" flat @click="toggleLeftDrawer" />

            <q-btn v-else size="xs" flat round dense icon="more_vert">
                <q-menu transition-show="flip-right" transition-hide="flip-left" class="text-right">
                    <q-list style="min-width: 100px">
                        <q-item clickable>
                            <q-item-section avatar>
                                <q-avatar size="35px">
                                    <img src="src/assets/kw.png">
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Krešimir</q-item-label>
                                <q-item-label caption>Wittenberg</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item clickable>
                            <q-item-section>{{ todaysDate }}</q-item-section>
                        </q-item>
                        <q-separator />
                        <q-item class="bg-primary" clickable>
                            <q-btn icon="logout" label="Logout" flat dense @click="logoutCurrentUser" />
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </q-toolbar>
    </q-header>
</template>


<style scoped>
.headerCustomStyle {
    height: 20px !important;
    display: flex;
    align-items: center !important;
}
</style>