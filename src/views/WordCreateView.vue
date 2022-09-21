<template>
  <section class="container">
      <div class="main-page-text">
        <h1><span class="color-yellow">Спочатку було </span> <span class="color-blue">слово!</span></h1>
        <h3>
          На цій сторінці ви можете створити слово, воно автоматично потрапляє в словник, але якщо на ньому буде багато
          дизлайків воно потрапить на розгляд адміністрації.
          <br>
          Введіть слова та їх тлумачення українською мовою!
        </h3>
      </div>
      <FormCreateWordComponent/>
  </section>
</template>

<script setup lang="ts">
import FormCreateWordComponent from '@/components/FormCreateWordComponent.vue'
</script>
