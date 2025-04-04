<script setup lang="ts">
import { onMounted } from 'vue'
import Card1 from '@/components/home/card1.vue'
import Card2 from '@/components/home/card2.vue'

import { useCountStore } from '@/store/count.ts'
const { loadData } = useCountStore()

onMounted(() => {
    loadData()
})
</script>

<template>
    <Card1 />
    <div class="box">
        <div class="t1">功能 特点</div>
        <div class="t2">效率为本，科技向善</div>
    </div>
    <Card2 />
</template>

<style scoped>
.box {
    margin: auto;
    margin-top: 240px;
}

.box .t1 {
    margin: auto;
    text-align: center;
    font-weight: bold;
    font-size: 48px;
}

.box .t2 {
    margin: auto;
    text-align: center;
    font-style: italic;
    font-size: 36px;
    color: #808080;
}
</style>