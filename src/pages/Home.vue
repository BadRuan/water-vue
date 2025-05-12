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
    <DataOverivew />
    <Features />
</template>
