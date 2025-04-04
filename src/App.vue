<script setup lang="ts">
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<template>
    <div class="outcontainer">
        <Header />
        <div class="container">
            <RouterView />
            <Footer />
        </div>
    </div>
</template>

<style scoped>
.outcontainer {
    background-color: #F7F7F7;
}
.container {
    margin: auto;
    width: 1440px;
    background-color: #F7F7F7;
}
</style>
