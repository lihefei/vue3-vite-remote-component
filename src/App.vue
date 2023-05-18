<template>
  <div class="wrapper">
    <Layout />
  </div>
</template>
<script setup>
import Layout from '@/views/Layout.vue';
</script>

<style lang="scss" scoped>
.wrapper {
 &:hover {
  background-color: rgba($color: #000000, $alpha: 0.1);
 }
}
</style>
