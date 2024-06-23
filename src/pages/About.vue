<template>
    <h1>关于</h1>
    <el-timeline style="max-width: 600px">
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
            {{ activity.content }}
        </el-timeline-item>
    </el-timeline>

</template>

<script setup>
const activities = [
    {
        content: '支持在线获取水位表，解决部分电脑无法运行问题。',
        timestamp: '2024-06-23',
    },
    {
        content: '支持达三线水位自动更改颜色功能',
        timestamp: '2024-05-06',
    },
    {
        content: '优化项目代码结构',
        timestamp: '2024-05-04',
    },
    {
        content: '一键生成水位表测试成功',
        timestamp: '2024-05-02',
    },
    {
        content: '项目构思',
        timestamp: '2024-04-28',
    },
]
</script>

<style>
h1 {
    text-align: center;
}
</style>