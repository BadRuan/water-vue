<script setup lang="ts">
import { ref } from 'vue';
import { routes } from '@/router/index.ts'

const selectedKeys = ref<string[]>(['']);

const route = routes.filter(item =>
  item.hasOwnProperty("meta")
)

</script>

<template>
  <a-layout-header>
    <div class="content">
      <img src="@/asset/logo.svg" />
      <div class="nav">
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
          <a-menu-item v-for="(item, index) in route" :key="index">
            <RouterLink :to="item.path">
              {{ item.meta.title }}
            </RouterLink>
          </a-menu-item>
        </a-menu>
      </div>
    </div>
  </a-layout-header>
</template>

<style scoped>
header {
  background: #141414;
}

.content {
  width: 1260px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.nav {
  display: flex;
  justify-content: right;
}
</style>