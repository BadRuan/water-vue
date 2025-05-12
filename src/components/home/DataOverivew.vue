<script setup lang="ts">
import { useCountStore } from '@/store/count.ts';
const { count } = useCountStore();
</script>

<template>
    <div class="wrap">
        <div class="card">
            <h2>助力水位发布效率提升</h2>
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

<style lang="scss" scoped>
.wrap {
    margin: auto;
    width: 1200px;
    background-color: rgb(242, 243, 249);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

    .card {
        margin: auto;
        margin-top: 40px;
        width: 1200px;
        height: 400px;
        background-image: url("@/assets/logo-big.svg");
        background-repeat: no-repeat;
        background-position: 95% 50%;

        h2 {
            margin: auto;
            padding: 84px 0 0 80px;
            font-size: 48px;
            font-family: 'XuandongKaishu';
        }

        .info {
            padding-top: 80px;
            padding-left: 60px;
            display: flex;
            gap: 40px;

            .info-item {
                width: 200px;

                span {
                    display: block;
                    margin: auto;
                    text-align: center;
                    font-size: 36px;
                    font-weight: bold;
                    color: #2A82E4;

                }

                p {
                    margin: auto;
                    padding-top: 40px;
                    text-align: center;
                    font-size: 28px;

                }
            }
        }

        &:hover {
            box-shadow: 4px 4px 6px #a6a6a6;
        }
    }
}
</style>