<script setup lang="ts">
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
</script>

<template>
    <div class="wrap">
        <Header />
        <div class="container">
            <RouterView />
            <Footer />
        </div>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrap {
    background-color: #F6F7FF;
}

.container {
    margin: auto;
    width: 1440px;
    background-color: #F6F7FF;
}
</style>
