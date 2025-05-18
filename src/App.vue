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

<style lang="scss" scoped>
.wrap {
    background-color: #fff;

    .container {
        margin: auto;
        width: $content-width;
        background-color: #fff;
    }
}
</style>
