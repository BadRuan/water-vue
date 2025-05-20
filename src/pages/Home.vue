<script setup lang="ts">
import { onMounted } from 'vue';
import DataOverivew from '@/components/home/DataOverivew.vue';
import Features from '@/components/home/Features.vue';
import { useCountStore } from '@/store/count.ts';
const { loadData } = useCountStore()

onMounted(() => {
    loadData()
})
</script>

<template>
    <div class="home">
        <DataOverivew />
        <Features />
    </div>
</template>

<style lang="scss" scoped>
.home {
    // background-image: linear-gradient(to bottom, rgb(235, 245, 255), #fff);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>