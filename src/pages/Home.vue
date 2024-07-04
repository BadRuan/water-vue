<template>
    <h1>鸠江水位小助手</h1>

    <t-divider />

    <div class="tdesign-demo-item--grid">
        <t-row>
            <t-col span="3">
                <div>
                    <h2>简单</h2>
                    <p class="c1">使用简单，单击即可</p>
                </div>
            </t-col>
            <t-col span="3">
                <div>
                    <h2>准确</h2>
                    <p class="c1">数据来源可靠（安徽水信息网站）</p>
                </div>
            </t-col>
            <t-col span="3">
                <div>
                    <h2>高效</h2>
                    <p class="c1">立即出表，无需等待</p>
                </div>
            </t-col>
            <t-col span="3">
                <div>
                    <h2>便捷</h2>
                    <p class="c1"> 跨平台，无局限</p>
                </div>
            </t-col>
        </t-row>
    </div>

    <t-divider />

    <t-row>
        <t-col span="4">
        </t-col>

        <t-col span="4">

            <Table2 />

            <t-divider />

            <Table1 />
        </t-col>

        <t-col span="4">
        </t-col>
    </t-row>

</template>

<script setup>
import Table1 from '@/components/tables/table1.vue'
import Table2 from '@/components/tables/table2.vue'
</script>

<style>
h1 {
    text-align: center;
}

h2 {
    text-align: center;
}

.c1 {
    text-align: center;
}

.mb-4 {
    margin: 0 auto;
    text-align: center;
}

h3 {
    text-align: center;
}

.t-button {
    min-width: 320px;
    max-width: 640px;
}
</style>