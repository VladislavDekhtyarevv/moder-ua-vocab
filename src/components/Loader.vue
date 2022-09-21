<template>
  <Message :severity="notification.status" :closable="false"> {{notification.message}}</Message>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import {ref, computed} from "vue";
import Message from 'primevue/message';
interface Props {
  notification: {
    status: boolean,
    message: string,
  }
}

const store = useStore()

const props = defineProps<Props>()

function close() {
  console.log(3423423)
  store.dispatch('closeNotification')
}

</script>

<style lang="scss">

</style>
