<template>
  <aside class="sidebar">
    <div class="sidebar__container">
        <router-link class="sidebar__item" to="/">Головна</router-link>
        <router-link class="sidebar__item" to="/profile">Профіль</router-link>
        <router-link class="sidebar__item" to="/words">Мої слова</router-link>
        <router-link class="sidebar__item" to="/word/create">Створити слово</router-link>
        <router-link class="sidebar__item" to="/liked-words">Лайкнуті слова</router-link>
    </div>
  </aside>
</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const store = useStore()
const authUser = computed(() => {
  return store.state.user && store.state.user.token;
})


</script>

<style scoped lang="scss">

</style>
