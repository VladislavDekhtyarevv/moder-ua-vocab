<template>
  <div class="wrapper-form">
    <div class="field">
      <InputText v-model="name" placeholder="Слово" :class="validations && validations['name'] ? 'p-invalid' : ''"/>
      <small v-if="validations && validations['name']" class="p-error">{{validations && validations['name'] ? validations['name'][0] : ''}}</small>
    </div>
    <div class="field">
      <Textarea v-model="description" placeholder="Тлумачення" :autoResize="true" rows="5" cols="30" :class="validations && validations['description'] ? 'p-invalid' : ''"/>
      <small v-if="validations && validations['description']" class="p-error">{{validations && validations['description'] ? validations['description'][0] : ''}}</small>
    </div>

    <Button label="Створити" @click="createWord"/>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

let name = ref<string | null>(null);
let description = ref<string | null>(null);

let validations = ref<object | null>(null);
const router = useRouter()

function createWord () {
  let data = {
    name:name.value, description:description.value
  }
  validations.value = null;
  store.dispatch('createWord', data).then((response) => {
        router.push({
          name: 'words',
        })
  },
  ({errors}: any) => {
    for (let [key, value] of Object.entries(errors)) {
      let text = value.toString().replace("name", "cлово");
      let text3 = text.toString().replace("description", "тлумачення");
      errors[key] = [text3];
    }
    validations.value = errors;
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
