<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">UAVOCAB</div>
      <div class="header__menu">
        <router-link class="header__item" to="/">Головна</router-link>
        <router-link class="header__item" to="/">Логін</router-link>
        <router-link class="header__item" to="/">Регістрація</router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { Options, Vue } from 'vue-class-component';

// @Options({
//   props: {
//     msg: String
//   }
// })

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
