<script lang="ts" setup>
import Promot from '@/components/table/prompt.vue'
import Tables from '@/components/table/tables.vue'
import recently from '@/components/table/recently.vue';
</script>

<template>
    <h1>防汛水位表下载</h1>
    <Promot />
    <Tables />
    <h3>随时掌握 最新水位</h3>
    <recently />
</template>

<style scoped>
h1 {
    margin: 0 auto;
    padding: 40px 0;
    font-size: 48px;
    font-weight: bold;
    text-align: center;
}
h3 {
    margin: auto;
    padding: 60px;
    font-size: 30px;
    text-align: center;
    font-style: italic;
    color: #808080;
}
</style>