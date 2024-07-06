<template>
    <div class="demo-card">
        <t-card class="c1" title="鸠江区三线水位测站记录情况登记表2" header-bordered hover-shadow>
            <t-list :split="true">
                <t-list-item>1. 当前整点时间对应水位</t-list-item>
                <t-list-item>2. 11 点前为昨日 8:00 水位; 11点后为今日8:00水位</t-list-item>
                <t-list-item>3. 当前整点对比今日或昨日 8:00 两比 涨/落</t-list-item>
                <t-list-item>4. 两小时内两比 涨/落</t-list-item>
            </t-list>
            <template #footer>
                <t-tooltip :content="message">
                    <t-button :disabled="isActive" href="/source/table2" target="_blank">
                        <download-icon />点击下载
                    </t-button>
                </t-tooltip>
            </template>
        </t-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import { DownloadIcon } from 'tdesign-icons-vue-next';

const message = "提示: 过整点10分钟后下载数据准确"
const isActive = ref(false);

const updateIsActive = () => {
    const currentMinute = new Date().getMinutes();
    console.log(currentMinute)
    isActive.value = currentMinute <= 10;
};

onMounted(() => {
    updateIsActive(); // 立即更新一次
    const intervalId = setInterval(updateIsActive, 60 * 1000); // 每分钟更新一次

});

watchEffect(() => {
    updateIsActive();
});
</script>
