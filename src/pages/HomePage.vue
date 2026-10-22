<template>
  <div class="flex flex-col items-center">
    <h1 class="m-8 text-center text-8xl font-display">{{pageHeader}}</h1>
    <img class="w-[1280px] h-[720px]" src="@/assets/images/image.png">
  </div>
  <button class="btn">Save changes</button>
</template>
<style scoped></style>


<script setup lang="ts">
  import { ref } from "vue";

  const pageHeader = ref('Pixel Art App')
</script>