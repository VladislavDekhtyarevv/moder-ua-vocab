<template>
  <div class="wrapper-form">
    <div class="field">
      <InputText type="email" v-model="email" :class="validations && validations['email'] ? 'p-invalid' : ''"/>
      <small v-if="validations && validations['email']" class="p-error">{{validations && validations['email'] ? validations['email'][0] : ''}}</small>
    </div>

    <div class="field">
      <Password v-model="password"  :class="validations && validations['password'] ? 'p-invalid' : ''"/>
      <small v-if="validations && validations['password']" class="p-error">{{validations && validations['password'] ? validations['password'][0] : ''}}</small>
    </div>
    <Button label="Увійти" @click="login"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

let password = ref<string | null>(null);
let email = ref<string | null>(null);

let validations = ref<object | null>(null);
const router = useRouter()

function login () {
  let data = {
    password:password.value, email:email.value
  }
  validations.value = null;
  store.dispatch('login', data).then((response) => {
        router.push({
          name: 'profile',
        })
  },
  ({errors}: any) => {
    validations.value = errors;
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
