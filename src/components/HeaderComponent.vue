<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">UAVOCAB</div>
      <div v-click-away="onClickAway">
        <div class="header_burger mobile"  :class="{ active: header }"  @click="burger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="header__menu" :class="{ active: header }">
          <router-link class="header__item" to="/">Головна</router-link>
          <router-link v-if='!authUser' class="header__item"  :to="{ name: 'login'}">Логін</router-link>
          <router-link v-if='!authUser'  class="header__item" to="/registration">Регістрація</router-link>
          <router-link v-if='authUser'  class="header__item" to="/profile">Профіль</router-link>
          <a href="#" v-if='authUser'  class="header__item" @click="logout">Вийти</a>
        </div>
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
let burgerState = ref(false)

const header = computed(() => {
  return store.state.header;
})

function burger() {
  store.state.header = !store.state.header;
}
const onClickAway = (event: any) => {
  store.state.header = false;
}

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
