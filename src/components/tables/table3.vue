<template>
    <div class="demo-card">
        <t-card class="c1" title="鸠江区三线水位测站记录情况登记表3" header-bordered hover-shadow>
            <t-list :split="true">
                <t-list-item>1. 当前整点时间对应水位</t-list-item>
                <t-list-item>2. 隐藏列: 4小时前整点时间对应水位</t-list-item>
                <t-list-item>3. 11 点前为昨日 8:00 水位; 11点后为今日8:00水位</t-list-item>
                <t-list-item>4. 当前整点对比今日或昨日 8:00 两比 涨/落</t-list-item>
                <t-list-item>5. 四小时内两比 涨/落</t-list-item>
            </t-list>
            <template #footer>
                <t-tooltip :content="message">
                    <t-button href="/source/table3" target="_blank">
                        <download-icon />点击下载
                    </t-button>
                </t-tooltip>
            </template>
        </t-card>
    </div>
</template>

<script setup lang="ts">
import { DownloadIcon } from 'tdesign-icons-vue-next';

const message = "提示: 过整点10分钟后下载数据准确"

</script>
