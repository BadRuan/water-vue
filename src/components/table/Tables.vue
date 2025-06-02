<script setup lang="ts">
import Button from '@/components/common/Button.vue';
</script>

<template>
    <div class="box">
        <div class="table">
            <div class="card">
                <h2>
                    <span class="t1">
                        <img src="@/assets/icon/Files-icons_24pt_file-image.svg" alt="">
                        三线水位表
                    </span>
                    <span class="t2">
                        Table.1
                    </span>
                </h2>
                <div class="line"></div>
                <ul>
                    <li>1、 今日 8:00 水位</li>
                    <li>2、 昨日 8:00 水位</li>
                    <li>3、 上周同期 8:00 水位</li>
                    <li>4、 去年同期 8:00 水位</li>
                    <li>5、 今日昨日8:00 水位对比</li>
                </ul>
                <a href="/table/1" target="_blank"><Button>下载水位表</Button></a>
            </div>

            <div class="card">
                <h2>
                    <span class="t1">
                        <img src="@/assets/icon/Files-icons_24pt_file-image.svg" alt="">
                        三线水位表
                    </span>
                    <span class="t2">
                        Table.2
                    </span>
                </h2>
                <div class="line"></div>
                <ul>
                    <li>1、 当前整点对应水位</li>
                    <li>2、 4小时前整点时间对应水位</li>
                    <li>3、 8小时前整点时间对应水位</li>
                </ul>
                <a href="/table/2" target="_blank"><Button>下载水位表</Button></a>
            </div>

            <div class="card">
                <h2>
                    <span class="t1">
                        <img src="@/assets/icon/Files-icons_24pt_file-image.svg" alt="">
                        三线水位表
                    </span>
                    <span class="t2">
                        Table.3
                    </span>
                </h2>
                <div class="line"></div>
                <ul>
                    <li>1、 今日 8:00 水位</li>
                    <li>2、 三日前 8:00 水位</li>
                    <li>3、 两比水位差值</li>
                    <li>4、 去年同期 8:00 水位</li>
                </ul>
                <a href="/table/3" target="_blank"><Button>下载水位表</Button></a>
            </div>

            <div class="card">
                <h2>
                    <span class="t1">
                        <img src="@/assets/icon/Files-icons_24pt_file-image.svg" alt="">
                        三线水位表
                    </span>
                    <span class="t2">
                        Table.4
                    </span>
                </h2>
                <div class="line"></div>
                <ul>
                    <li>1、 今日 8:00 水位</li>
                    <li>2、 昨日 8:00 水位</li>
                    <li>3、 两比水位差值</li>
                    <li>4、 去年同期 8:00 水位</li>
                </ul>
                <a href="/table/4" target="_blank"><Button>下载水位表</Button></a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    background-color: $bgcolor;

    .table {
        width: $content-width;
        margin: auto;
        padding: 40px 0;
        display: flex;
        justify-content: space-between;

        .card {
            width: 260px;
            height: 280px;
            background-color: #fff;
            display: flex;
            flex-direction: column;

            align-items: center;

            h2 {
                padding: 10px 10px;

                .t1 {
                    font-size: 0.9em;
                    margin-right: 30px;
                }

                .t2 {
                    color: $pcolor;
                    font-size: 0.6em;
                    background-color: #EDF4FE;
                }
            }

            .line {
                background-color: #E5E5E5;
                width: 200px;
                height: 1px;
                margin: 4px 0;
            }

            ul {
                list-style-type: none;
                margin: 10px 12px;
                height: 120px;
                overflow: hidden;

                li {
                    height: 24px;
                }
            }

            a {
                margin-top: 10px;
                text-decoration: none;
            }
        }
    }
}
</style>