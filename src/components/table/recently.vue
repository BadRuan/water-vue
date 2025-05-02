<script setup lang="ts">
import { onMounted } from 'vue'
import { useRecentlyStore } from '@/store/recently.ts'
const { recently_data, get_recently } = useRecentlyStore()

onMounted(() => {
    get_recently()
})
</script>

<template>
    <div class="box1">
        <h2>Recently</h2>
        <h1>最新水位</h1>
        <div class="line"></div>
    </div>

    <div class="box2">
        <div class="grid_box">
            <div class="block" v-for="item in recently_data" :key="item.stcd">
                <img src="@/assets/icon/location-icon.svg">
                <span class="s_name">{{ item.name }}</span>
                <img src="@/assets/icon/water-icon.svg">
                <span class="s_current">{{ item.current }}</span>
                <span class="unit">m</span>
                <img src="@/assets/icon/date-icon.svg">
                <span class="r_time">更新时间：{{ item.tm }} </span>
            </div>
        </div>
        <div class="button">
            <a href="#" @click="get_recently()" class="update">
                <img src="@/assets/icon/update-icon.svg">更新水位</a>
        </div>

    </div>
</template>

<style scoped>
.box1 {
    margin-top: 60px;
    margin-left: 20px;
    margin-bottom: 40px;
}

.box1 h1 {
    font-size: 28px;

}

.box1 h2 {
    font-size: 20px;
    color: #383838;
}

.line {
    width: 60px;
    height: 8px;
    border-bottom: 2px solid #2A82E4;
}

.block {
    margin: 0 340px;
    padding-left: 20px;
    border-bottom: solid 1px #A6A6A6;
}

.block img {
    margin-right: 8px;
}

.block span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
}

.s_name {
    padding: 0 12px;
    width: 160px;
    margin-right: 40px;
}

.s_current {
    padding: 0 12px;
    width: 60px;
}

.unit {
    padding-right: 12px;
    margin-right: 30px;
}

.r_time {
    padding: 0 12px;
}

.block:hover {
    background-color: #E9ECFE;
    color: #3B3EFF;
}

.button {
    width: 160px;
    height: 40px;
    margin: 20px auto;
}

.box2 a {
    display: inline-block;
    font-size: 16px;
    line-height: 40px;
    background-color: #1077FB;
    color: #fff;
    padding: 0 24px;
    border-radius: 4px;
}

.box2 a:hover {
    background-color: #4696ff;
}

.box2 a img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}
</style>