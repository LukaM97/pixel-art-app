<template>
  <div class="relative flex flex-col items-center h-[920px]">
    <img class="object-fill w-full h-full" src="@/assets/images/main.png">
    <h1 class="absolute left-1/2 -translate-x-1/2 top-[25%] m-8 text-center text-9xl text-shadow-lg text-shadow-black/80 font-black font-display">{{pageHeader}}</h1>
    <div class="absolute left-1/2 -translate-x-1/2 top-[45%] text-black text-8xl font-bold whitespace-nowrap leading-tight font-display">Draw your pixel art</div>
  </div>
  <hr class="border-8 border-solid">
  <div class="relative">
    <img src="@/assets/images/image1.png">
    <div class="absolute left-0 right-0 top-[10%] items-center w-full flex flex-col">
        <div class="text-black text-7xl font-bold font-display text-center">Create cool art</div>
        <div class="flex justify-around gap-2 mt-32">
            <img class="h-[500px] w-[500px] border-12 border-solid shadow-lg shadow-white" src="@/assets/images/image.png">
            <img class="h-[500px] w-[500px] border-12 border-solid shadow-lg shadow-white" src="@/assets/images/image2.png">
            <img class="h-[500px] w-[500px] border-12 border-solid shadow-lg shadow-white" src="@/assets/images/image2.png">
        </div>
    </div>
  </div>
  <hr class="border-8 border-solid">
  <div class="relative">
    <div class="absolute left-1/2 -translate-x-1/2 top-[10%] text-white text-7xl font-bold font-display text-center text-shadow-lg text-shadow-[green]/80">Colaborate with others</div>
    <div class="absolute left-1/2 -translate-x-1/2 top-[30%]">
        <img class="h-[400px] w-[500px] border-12 border-solid shadow-lg shadow-white" src="@/assets/images/image4.png">
    </div>
    <img src="@/assets/images/main3.png">
  </div>
</template>
<style scoped></style>


<script setup lang="ts">
  import { ref } from "vue";

  const pageHeader = ref('Pixel Art App')
</script>