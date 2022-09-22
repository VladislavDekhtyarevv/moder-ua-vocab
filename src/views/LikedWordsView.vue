<template>
  <section class="container">
      <div class="main-page-text">
        <h1><span class="color-yellow">У кожному </span> <span class="color-blue">слові </span> <span class="color-yellow"> є сенс. </span></h1>
        <h3>
          На цій сторінці ви можете побачити всі слова які вам сподобались.
        </h3>
      </div>
    <ContainerLikedWordComponent />
  </section>
</template>

<script setup lang="ts">
import ContainerLikedWordComponent from '@/components/ContainerLikedWordComponent.vue'
</script>
