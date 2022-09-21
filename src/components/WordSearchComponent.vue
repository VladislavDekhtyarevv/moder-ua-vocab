<template>
  <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText type="text" v-model="search" @input="SetSearch" placeholder="Пошук" />
        </span>
</template>

<script setup lang="ts">
import {ref} from "vue";
import InputText from 'primevue/inputtext';

const emit = defineEmits(['SetSearch'])
let search = ref<null | string>(null);
function SetSearch() {
  emit('SetSearch', search)
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
