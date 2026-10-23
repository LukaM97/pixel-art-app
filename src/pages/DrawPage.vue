<template>
    <div class="flex justify-between my-16 ml-16">
        <div class="flex flex-wrap" :style="{ width: containerSize + 'px', height: containerSize + 'px'}">
            <div v-for="i in totalSquares" :key=i :class=divClass></div>
        </div>
        <div class="flex flex-col items-center gap-10 border-6 w-[100px]">
            <div class="mt-8 border-4 rounded-2xl p-2">
                <img class="w-[40px] h-[40px]" src="@/assets/images/pen.png">
            </div>
            <div>
                <div class="w-[50px] h-[30px] border-1" v-for="(color,index) in colors" :key=index :style="{ backgroundColor: color.name}"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    const n = 140;
    const totalSquares = ref(n*n);
    const containerSize = ref(10*n);
    const divClass=ref("w-[10px] h-[10px] border-1")

    const colors=ref([
        {name: 'red'},
        {name: 'green'},
        {name: 'blue'},
        {name: 'purple'},
        {name: 'yellow'},
        {name: 'orange'},
        {name: 'black'},
        {name: 'white'},
    ])
</script>