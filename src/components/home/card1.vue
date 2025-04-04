<script lang="ts" setup>
import { useCountStore } from '@/store/count.ts'
const { count } = useCountStore()
</script>

<template>
    <div class="content1">
        <div>
            <h1 class="title1">鸠江水位发布小助手</h1>
            <h2 class="title2">优化水位发布工作流程 助力实现效率飞跃</h2>
        </div>
        <div class="content2">
            <h2>助力防汛水位发布效率质提升</h2>
            <div class="info">
                <div class="info-item">
                    <span>{{ count.total_count }}</span>
                    <p>现有水位数据</p>
                </div>
                <div class="info-item">
                    <span>{{ count.thisyear_count }}</span>
                    <p>今年水位数据</p>
                </div>
                <div class="info-item">
                    <span>{{ count.visits }}</span>
                    <p>本站访问次数</p>
                </div>
                <div class="info-item">
                    <span>{{ count.downloads }}</span>
                    <p>水位表下载次数</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content1 {
    width: 1440px;
    height: 800px;
    background-image: url("@/assets/bgimg.svg");
    background-repeat: no-repeat;
    background-size: cover;
}

.title1 {
    margin: 0;
    padding-top: 300px;
    padding: 0 auto;
    text-align: center;
    font-size: 72px;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 2px black;
}

.title2 {
    text-align: center;
    font-size: 48px;
    color: #fff;
    text-shadow: 2px 2px 2px black;
}

.content2 {
    margin: auto;
    margin-top: 80px;
    width: 1200px;
    height: 400px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 2px 2px 2px black;
    background-image: url("@/assets/logo-big.svg");
    background-repeat: no-repeat;
    background-position: 95% 50%;
}

.content2 h2 {
    margin: auto;
    padding: 84px 0 0 80px;
    font-size: 48px;
}

.info {
    padding-top: 80px;
    padding-left: 60px;
    display: flex;
    gap: 40px;
}

.info-item {
    width: 200px;
}

.info-item span {
    display: block;
    margin: auto;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: #2A82E4;
}

.info-item p {
    margin: auto;
    padding-top: 40px;
    text-align: center;
    font-size: 28px;
}
</style>