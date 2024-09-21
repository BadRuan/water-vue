<template>
    <div class="demo-card">
        <t-card class="c1" title="鸠江区三线水位测站记录情况登记表" header-bordered hover-shadow>
            <t-list :split="true">
                <t-list-item>1. 今日 8:00 水位</t-list-item>
                <t-list-item>2. 昨日 8:00 水位</t-list-item>
                <t-list-item>3. 今日 8:00 对比昨日 8:00 两比 涨/落</t-list-item>
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
