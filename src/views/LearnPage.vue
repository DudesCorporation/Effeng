<template>
  <div class="bg-white">
    <h2 style="font-weight: bold; font-size: 30px">Learn new word</h2>
    <h3>{{ result }}</h3>
    <button
      class="button"
      style="background-color: royalblue; color: white; margin-top: 12px; margin-bottom: 10px;"
      @click="nextWord"
    >
      next word please
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const result = ref<string>();

function getWordById(id: string) {
  return store.dispatch('words/getWordById', id);
}

result.value = await getWordById('123123');

async function nextWord() {
  const nextWordId = String(Number(result.value) + 1);
  result.value = await getWordById(nextWordId);
}
</script>
