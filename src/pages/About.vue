<template>
    <h1>开发历程</h1>

    <div class="warp">
        <t-list :split="true">
            <t-list-item v-for="(item, index) in activities" :key="index">
                <template #content>
                    <t-comment avatar="https://tdesign.gtimg.com/site/avatar.jpg" author="阮福民" :datetime="item.datetime"
                        :content="item.content">
                        <template #actions>
                            <t-space key="thumbUp" :size="7">
                                <t-icon name="thumb-up" />
                                <span>666</span>
                            </t-space>
                        </template>
                    </t-comment>
                </template>
            </t-list-item>
        </t-list>
    </div>

</template>

<script setup>
const activities = [
    {
        content: '有细化高频次使用需求，等需求明确开发。',
        datetime: '2024-06-25',
    },
    {
        content: '优化界面设计，更加美观。',
        datetime: '2024-06-24',
    },
    {
        content: '调整为在线获取水位表，新增基础界面，解决部分电脑无法运行问题。',
        datetime: '2024-06-23',
    },
    {
        content: '新增达三线水位自动标注对应颜色功能',
        datetime: '2024-05-06',
    },
    {
        content: '优化项目代码结构',
        datetime: '2024-05-04',
    },
    {
        content: '一键生成水位表功能初步测试成功',
        datetime: '2024-05-02',
    },
    {
        content: '开始项目初步构思',
        datetime: '2024-04-28',
    },
]
</script>

<style>
.warp {
    width: 700px;
    margin: 0 auto;
}
</style>