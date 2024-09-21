<template>
    <h1>下步计划(因无需求，搁置)</h1>

    <t-divider />

    <t-row>
        <t-col span="4">
        </t-col>

        <t-col span="4">
            <t-list :split="true" size="large" v-for="(item, index) in plans" :key="index">
                <t-list-item>{{ item }}</t-list-item>
            </t-list>
        </t-col>

        <t-col span="4">
        </t-col>
    </t-row>


</template>

<script setup>
import { reactive } from 'vue'

const plans = reactive([
    "多表随发: 支持多种水位发布需求",
    "统计计数: 显示功能使用次数",
    "数据总览: 总水位条目数、各站点条目数，访问次数、使用次数等",
    "功能优化: 点击下载表格后服务端的表格需要自动删除",
    "功能优化: 根据按钮状态判断是否有水位数据",
])
</script>