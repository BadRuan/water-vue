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
        content: '开始项目初步构思',
        datetime: '2024-04-28',
    },
    {
        content: '支持一键生成水位表',
        datetime: '2024-05-02',
    },
    {
        content: '支持三线水位自动标注对应颜色',
        datetime: '2024-05-06',
    },
    {
        content: '项目变更为Web版本，解决部分电脑客户端无法运行程序问题。',
        datetime: '2024-06-23',
    },
    {
        content: '更新界面设计，更加美观。',
        datetime: '2024-06-24',
    },
    {
        content: '支持每2小时、每1小时高频次发布需求。',
        datetime: '2024-06-29',
    },
    {
        content: '支持根据当前时间自动对比昨日/今日8时水位。',
        datetime: '2024-07-04',
    },
    {
        content: '支持隐藏不需要显示的数据列。',
        datetime: '2024-07-05',
    },
    {
        content: '大道至简，仅留使用功能。',
        datetime: '2024-09-21',
    }
])
</script>

<style>
.warp {
    width: 700px;
    margin: 0 auto;
}
</style>