<template>
  <div class="wrapper-form">
    <div class="field">
      <InputText type="text" v-model="name" placeholder="Ім'я" :class="validations && validations['name'] ? 'p-invalid' : ''"/>
      <small v-if="validations && validations['name']" class="p-error">{{validations && validations['name'] ? validations['name'][0] : ''}}</small>
    </div>


    <div class="field">
      <InputText type="email" placeholder="Електронна адреса" v-model="email" :class="validations && validations['email'] ? 'p-invalid' : ''"/>
      <small v-if="validations && validations['email']" class="p-error">{{validations && validations['email'] ? validations['email'][0] : ''}}</small>
    </div>

    <div class="field">
      <Password v-model="password" placeholder="Пароль"  :class="validations && validations['password'] ? 'p-invalid' : ''"/>
      <small v-if="validations && validations['password']" class="p-error">{{validations && validations['password'] ? validations['password'][0] : ''}}</small>
    </div>
    <Button label="Зареєструватись" @click="registration"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import DataRegistration from "@/types/DataRegistration";

const store = useStore()

let name = ref<string | null>(null);
let password = ref<string | null>(null);
let email = ref<string | null>(null);

let validations = ref<object | null>(null);
const router = useRouter()

function registration () {
  let data = ref<DataRegistration>({
    name:name.value, password:password.value, email:email.value
  })
  validations.value = null;
  store.dispatch('registration', data.value).then((response) => {
        router.push({
          name: 'profile',
        })
  },
  ({errors}: any) => {
    for (let [key, value] of Object.entries(errors)) {
      let text = value.toString().replace("name", "ім'я");
      let text2 = text.toString().replace("email", "електронна адреса");
      let text3 = text2.toString().replace("password", "пароль");
      errors[key] = [text3];
    }
    validations.value = errors;
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
