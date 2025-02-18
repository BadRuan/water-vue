<template>
    <h1>下步计划(暂列)</h1>

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
    "1、 统计计数: 显示功能使用次数, 如：访问次数，水位表使用次数",
    "2、 数据总览: 总及每年度水位条目数、各水文站点条目数等",
    "3、 功能优化: 点击下载表格后服务端的表格需要自动删除",
    "4、 功能优化: 根据按钮状态判断是否有水位数据",
    "开发视个人时间和精力安排"
])
</script>