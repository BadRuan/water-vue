<template>
    <div class="demo-card">
        <t-card class="c1" title="鸠江区三线水位测站记录情况登记表3" header-bordered hover-shadow>
            <t-list :split="true">
                <t-list-item>1. 当前整点时间对应水位</t-list-item>
                <t-list-item>2. 前2小时整点时间水位</t-list-item>
                <t-list-item>3. 前4小时整点时间水位</t-list-item>
                <t-list-item>4. 前6小时整点时间水位</t-list-item>
                <t-list-item>5. 前8小时整点时间水位</t-list-item>
                <t-list-item>6. 前10小时整点时间水位</t-list-item>
            </t-list>
            <template #footer>
                <t-tooltip :content="message">
                    <t-button href="/api/table3" target="_blank">
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
