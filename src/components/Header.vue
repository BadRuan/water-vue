<template>
    <el-menu class="el-menu-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
        mode="horizontal">
        <el-menu-item index="1">
            首页
        </el-menu-item>
        <el-menu-item index="2">
            代办清单
        </el-menu-item>
        <el-menu-item index="3">
            工作进展
        </el-menu-item>
        <el-menu-item index="4">
            工作日志
        </el-menu-item>
        <el-menu-item index="5">
            开发历程
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)
</script>