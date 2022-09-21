<template>
  <div class="words__single">
    <div class="words__single__name">{{props.word.name}}</div>
    <p class="words__single__description"> - {{props.word.description}}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  'word': Object
})


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
