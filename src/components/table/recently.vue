<script setup lang="ts">
import {onMounted} from 'vue'
import { useRecentlyStore } from '@/store/recently.ts'
const { recently_data, get_recently } = useRecentlyStore()

onMounted(()=>{
    get_recently()
})
</script>

<template>
    <div class="box">
        <div class="grid_box">
            <div class="block" v-for="item in recently_data" :key="item.stcd">
                <span class="s_name">{{ item.name }}</span>
                <span class="s_current">{{ item.current }}</span>
                <span class="unit">m</span>
                <p class="r_time">更新时间：{{ item.tm }} </p>
            </div>
        </div>
        <div class="line"></div>
        <a href="#" @click="get_recently()" class="update"><img src="@/assets/icon/update-icon.svg">更新水位</a>
    </div>
</template>

<style scoped>
.box {
    margin: 20px auto;
    padding: 40px;
    width: 1200px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 2px 2px 2px rgb(178, 178, 178);
}

.grid_box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    row-gap: 20px;
}

.block {
    width: 300px;
    margin: 0;
    padding: 0;
}

.s_name {
    font-size: 36px;
}

.s_current {
    padding: 0 12px;
    font-size: 20px;
    color: #2A82E4;
}

.unit {
    font-size: 20px;
}

.r_time {
    margin: 0;
    padding-top: 8px;
    font-size: 20px;
    border-top: 1px solid black;
}

.line {
    margin: 40px auto;
    width: 1120px;
    border: 0.5px solid rgb(132, 132, 132);
}

.update {
    display: block;
    width: 140px;
    height: 40px;
    margin: auto;
    padding: 0;
    padding-right: 10px;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    background-color: #1077FB;
    color: #fff;
    border-radius: 12px;
}

img {
    padding: 0 8px;
}

.update:hover {
    background-color: #63A6FC;
}
</style>