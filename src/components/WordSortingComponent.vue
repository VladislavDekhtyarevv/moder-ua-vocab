<template>
  <Dropdown v-model="sort" :options="sortParams" :loading="sortStatus" @change="selectSort" optionLabel="name" placeholder="Відсортувати" />
</template>

<script setup lang="ts">
import {ref} from "vue";
import Dropdown from 'primevue/dropdown';

const emit = defineEmits(['setSort'])


let sort = ref<number>(5);
const sortParams = [
  {name: 'Сортування на ім\'я А-Я', value: 1},
  {name: 'Сортування на ім\'я Я-А', value: 2},
  {name: 'Найновіші', value: 3},
  {name: 'Найстаріші', value: 4},
  {name: 'Найпопулярніші', value: 5}
];
const sortStatus = false;

function selectSort() {
  emit('setSort', sort)
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
