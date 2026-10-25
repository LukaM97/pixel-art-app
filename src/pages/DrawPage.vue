<template>
    <div class="flex justify-between my-16 ml-16" :style="customIconUrl">
        <div class="flex flex-wrap shadow-2xl shadow-black" :style="{ width: containerSize + 'px', height: containerSize + 'px'}">
            <div class="w-[10px] h-[10px] border-1" v-for="i in totalSquares" :key=i :style="{backgroundColor : divColors[i]}" @click.self="drawColor(i)"></div>
        </div>
        <div class="flex flex-col items-center gap-5 border-6 w-[100px]">
            <div class="mt-8 border-4 rounded-2xl p-2" @click="setTool('cursor')">
                <button class="w-[40px] h-[40px]">
                    <img src="@/assets/images/cursor.png" class="pointer-events-none">
                </button>
            </div>
            <div class="border-4 rounded-2xl p-2" @click="setTool('pen')">
                <button class="w-[40px] h-[40px]">
                    <img src="@/assets/images/pen.png" class="pointer-events-none">
                </button>
            </div>
            <div>
                <div class="w-[50px] h-[30px] border-1" 
                    v-for="(color,index) in colors" 
                    :key=index :style="{ backgroundColor: color.name}" 
                    @click.self="setColor(color.name)" 
                    :class="{ 'border-4 border-sky-500': currentColor === color.name }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from "vue";
    import penIcon from '@/assets/images/pen-icon.png'

    const n = 140;
    const totalSquares = ref(n*n);
    const containerSize = ref(10*n);
    const currentColor= ref('black')
    const currentTool = ref('cursor')

    const customIconUrl = computed(() => {
        switch(currentTool.value){
            case 'pen':
                return { cursor: `url('${penIcon}') 16 16, pointer` }
            case 'cursor':
                return { cursor: `default` }
            default:
                return { cursor: 'default' }
        }
    })

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

    const setColor = (color: string) => {
        currentColor.value = color
    }

    const divColors = ref<Record<number, string>>({})
    const drawColor = (i : number) => {
        divColors.value[i] = currentColor.value
    }

    const setTool = (tool: string) => {
        currentTool.value = tool
    }

</script>