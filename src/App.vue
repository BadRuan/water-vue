<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <t-layout>
    <Header />
    <t-content>
      <RouterView />
    </t-content>
    <t-divider />
    <Footer />
  </t-layout>

</template>
