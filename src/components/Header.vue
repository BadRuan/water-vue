<template>
    <el-menu class="el-menu-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
        mode="horizontal">
        <RouterLink to="/">
            <el-menu-item index="1">
                首页
            </el-menu-item>
        </RouterLink>
        <RouterLink to="/about">
            <el-menu-item index="2">
                关于
            </el-menu-item>
        </RouterLink>
    </el-menu>
</template>

<script setup>

</script>

<style scoped>
.router-link,
.router-link-exact-active,
.router-link-active {
  text-decoration: none; /* 移除下划线 */
  color: inherit; /* 继承父元素的颜色，或直接指定颜色 */
  background-color: transparent; /* 移除背景色 */
  /* 添加其他需要重置的样式 */
}
</style>