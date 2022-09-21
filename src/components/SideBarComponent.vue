<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">UAVOCAB</div>
      <div class="header__menu">
        <router-link class="header__item" to="/">Головна</router-link>
        <router-link v-if='!authUser' class="header__item"  to="/login">Логін</router-link>
        <router-link v-if='!authUser'  class="header__item" to="/registration">Регістрація</router-link>
        <router-link v-if='authUser'  class="header__item" to="/profile">Профіль</router-link>
        <a href="#" v-if='authUser'  class="header__item" @click="logout">Вийти</a>
      </div>
    </div>
  </header>
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

function logout () {
  store.dispatch('logout').then((response) => {
        router.push({
          name: 'home',
        })
      },
      ({errors}: any) => {
        console.log(errors)
      })
}

</script>

<style scoped lang="scss">

</style>
