<template>
  <div>
    <el-button :type="color" @click="changeColor"> 切换颜色 </el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const color = ref('primary');
const changeColor = () => {
  color.value = color.value === 'primary' ? 'danger' : 'primary';
};

</script>

<style scoped></style>
