<template>
  <div class="header-words">
    <WordSortingComponent
        class="header-words__sort"
        @set-sort="setSort"
    />
    <WordSearchComponent
        class="header-words__sort"
    @set-search="SetSearch"/>
  </div>
  <div class="words">
      <WordComponent
          v-for="word in words"
          :key="word.id"
          :word="word"
      />
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import WordComponent from '@/components/WordComponent.vue';
import WordSortingComponent from '@/components/WordSortingComponent.vue';
import WordSearchComponent from '@/components/WordSearchComponent.vue';
import InfiniteLoading from 'vue-infinite-loading';
import Word from "@/types/Word";
import { useStore } from 'vuex'

const store = useStore()

let words = ref<Word[]>([]);
let page = ref<number>(1);
let text = ref<string>('');
let infiniteId = ref<number>(Date.now());


function infiniteHandler($state : any) {

  store.dispatch('getWords', {
    page:page.value,
    sort:sort.value,
    text:text.value,
  }).then((response) => {
    if(response.data.length) {
      page.value += 1;
      words.value = words.value.concat(response.data);
      $state.loaded();
    }else {
      $state.complete();
    }
  })
}

let sort = ref<number>(5);
function setSort(value :any) {
  sort.value = value.value.value;
  page.value = 1;
  words.value = [];
  infiniteId.value += 1;
}
function SetSearch(value :any) {
  text.value = value.value;
  page.value = 1;
  words.value = [];
  infiniteId.value += 1;
}


</script>

<style scoped lang="scss">

</style>
