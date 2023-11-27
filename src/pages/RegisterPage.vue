<script setup lang="ts">
import { registerForm } from 'src/components/constUser';
import { registerUser } from 'src/service/userApi';
import { getRandomImage } from 'src/service/utils';

const registerUserHandler = async () => {
  try {
    await registerUser(registerForm.value);
    registerForm.value = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      accept: false
    };
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="full-width shadow-10" style="max-width: 550px;">

      <q-card-section horizontal>
        <q-img class="col-5" :src="getRandomImage()">
          <!-- <div class="absolute-bottom-left text-subtitle2 text-center">Factory X</div> -->
        </q-img>

        <q-card-section class="col-7 q-mt-xs q-px-xl q-py-md">
          <div class="flex flex-center">
            <q-avatar :size="$q.screen.gt.xs ? '100px' : '80px'">
              <q-img src="src/assets/upload.svg" />
            </q-avatar>
          </div>

          <div class="text-h5 text-primary q-mb-xs">Register</div>
          <div class="q-mt-lg">
            <q-input v-model.trim="registerForm.firstName" class="q-mb-md" no-error-icon placeholder="first name" rounded
              outlined dense />
            <q-input v-model.trim="registerForm.lastName" class="q-mb-md" no-error-icon placeholder="last name" rounded
              outlined dense />
            <q-input v-model.trim="registerForm.email" class="q-mb-md" no-error-icon placeholder="email" rounded outlined
              dense />
            <q-input v-model.trim="registerForm.password" class="q-mb-md" no-error-icon type="password"
              placeholder="password" rounded outlined dense />

            <q-toggle v-model="registerForm.accept" checked-icon="check" label="I accept the license and terms" />

            <div class="q-mt-md column items-center">
              <q-btn :disabled="!registerForm.accept" label="Register" type="submit" style="background-color:#FF813C;"
                class="full-width" @click="registerUserHandler" />

              <div class="q-mt-md">Have account？<router-link to="/login" class="text-primary">Login</router-link>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>