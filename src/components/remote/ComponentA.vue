<template>
  <div class="component">
    <h3>markdown转html</h3>
    <textarea v-model="text"></textarea>
    <div v-html="markedStr"></div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { marked } from 'marked';


const text = ref('- hello, async component vue3');
const markedStr = ref('');

watch(
  text,
  (val) => {
    // 同步加载 marked
    markedStr.value = marked(val);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.component {
  textarea {
    width: 100%;
    height: 400px;
  }
}
</style>
