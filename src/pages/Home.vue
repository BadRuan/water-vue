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
            <div class="demo-card">
                <t-card  class="c1"  title="鸠江区三线水位测站记录情况登记表" header-bordered hover-shadow >

                    <t-list :split="true" size="large">
                        <t-list-item>自动填写：当前日期、目标水位</t-list-item>
                        <t-list-item>根据水位高程自动标注对应颜色</t-list-item>
                        <t-list-item>水位范围：今日、昨日、上周同期、去年同期 8:00 水位</t-list-item>
                    </t-list>

                    <template #footer>
                        <t-button href="/api/table" target="_blank">
                            <download-icon />点击下载
                        </t-button>
                    </template>

                </t-card>
            </div>
        </t-col>

        <t-col span="4">
        </t-col>
    </t-row>



</template>

<script setup>
import { DownloadIcon } from 'tdesign-icons-vue-next';
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