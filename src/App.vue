<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <Header />
  <a-layout class="layout">
    <a-layout-content style="padding: 0 50px">
      <div class="content">
        <RouterView />
      </div>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<style scoped>
.content {
  width: 1440px;
  margin: auto;
}
</style>