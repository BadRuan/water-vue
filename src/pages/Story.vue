<template>
    <h1>开发历程</h1>

    <t-divider />

    <t-row>
        <t-col span="4">
        </t-col>

        <t-col span="4">

            <t-timeline>
                <t-timeline-item v-for="(item, index) in activities" :key="index" :label="item.datetime">{{ item.content
                    }}</t-timeline-item>
            </t-timeline>

        </t-col>

        <t-col span="4">
        </t-col>
    </t-row>

</template>

<script setup>
import { reactive } from 'vue'

const activities = reactive([
    {
        content: '表2 2小时前水位列自动隐藏。',
        datetime: '2024-07-03',
    },
    {
        content: '表2 根据时间自动对比昨日/今日8时水位。',
        datetime: '2024-07-04',
    },
    {
        content: '新增1小时发布一次水位功能。',
        datetime: '2024-06-30',
    },
    {
        content: '新增2小时发布一次水位功能。',
        datetime: '2024-06-29',
    },
    {
        content: '优化界面设计，更加美观。',
        datetime: '2024-06-24',
    },
    {
        content: '新增Web UI界面。',
        datetime: '2024-06-23',
    },
    {
        content: '调整为在线获取水位表，解决部分电脑无法运行问题。',
        datetime: '2024-06-23',
    },
    {
        content: '新增达三线水位自动标注对应颜色功能',
        datetime: '2024-05-06',
    },
    {
        content: '优化项目代码',
        datetime: '2024-05-04',
    },
    {
        content: '初步测试一键生成水位表功能',
        datetime: '2024-05-02',
    },
    {
        content: '开始项目初步构思',
        datetime: '2024-04-28',
    },
])
</script>

<style>
.warp {
    width: 700px;
    margin: 0 auto;
}
</style>