<template>
  <HeaderComponent/>
  <SideBarComponent v-if="authUser"/>
  <router-view/>
  <transition name="fade">
    <Notification
        v-if="notification.status"
        :notification="notification"
    />
  </transition>
</template>

<script setup lang="ts">
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import SideBarComponent from "@/components/SideBarComponent.vue";
  import Notification from '@/components/Notification.vue';
  import {computed, onMounted} from 'vue'
  import { useStore } from 'vuex'
  import axios from "axios";
  import NProgress from 'nprogress';
  import 'nprogress/nprogress.css'

  const store = useStore()

  const authUser = computed(() => {
    return store.state.user && store.state.user.token;
  })
  const notification = computed(() => {
    return store.state.notification;
  })

  onMounted(() => {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      store.commit('setUser', userData)
    }
    axios.interceptors.request.use(config => {
      NProgress.start()
      return config
    })
    axios.interceptors.response.use(response => {
          NProgress.done()
      return response;
        },
        error => {
          NProgress.done()
          if (error.response && error.response.status === 401) {
            store.dispatch('logout')
          }
          return Promise.reject(error)
        }
    )
  })


</script>

<style lang="scss">

</style>
