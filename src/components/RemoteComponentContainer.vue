<template>
  <component :is="mode" />
</template>

<script setup>
import { ref, watch, markRaw } from 'vue';

const props = defineProps(['url'])

let mode = ref('div');


const loadScript = (url) => {
  return fetch(url).then((res) => {
    if (res.status === 200) {
      res.text().then((code) => {

        new Function(code)();
        mode.value = markRaw(window.MyComponent);
      });
    }
  });
};

watch(() => props.url, (val) => {
  val && loadScript(val);
})

</script>

<style></style>
