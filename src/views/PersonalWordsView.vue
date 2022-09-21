<template>
  <section class="container">
      <div class="main-page-text">
        <h1><span class="color-yellow">Слово </span> <span class="color-blue">не горобець!</span> </h1>
        <h3>
          На цій сторінці ви можете побачити всі слова які ви створили а також керувати ними.
        </h3>
      </div>
    <ContainerPersonalWordComponent />
  </section>
</template>

<script setup lang="ts">
import ContainerPersonalWordComponent from '@/components/ContainerPersonalWordComponent.vue';
</script>
