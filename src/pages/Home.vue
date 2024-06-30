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
                <t-card class="c1" title="鸠江区三线水位测站记录情况登记表4(每1小时发布)" header-bordered hover-shadow>
                    <t-list :split="true">
                        <t-list-item>1. 当前整点时间对应水位</t-list-item>
                        <t-list-item>2. 前1小时整点时间水位</t-list-item>
                        <t-list-item>3. 前2小时整点时间水位</t-list-item>
                        <t-list-item>4. 前3小时整点时间水位</t-list-item>
                        <t-list-item>5. 前4小时整点时间水位</t-list-item>
                        <t-list-item>6. 前5小时整点时间水位</t-list-item>
                    </t-list>
                    <template #footer>
                        <t-tooltip :content="message">
                            <t-button href="/api/table4" target="_blank">
                                <download-icon />点击下载
                            </t-button>
                        </t-tooltip>
                    </template>
                </t-card>
            </div>

            <t-divider />

            <div class="demo-card">
                <t-card class="c1" title="鸠江区三线水位测站记录情况登记表3(每2小时发布)" header-bordered hover-shadow>
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

            <t-divider />

            <div class="demo-card">
                <t-card class="c1" title="鸠江区三线水位测站记录情况登记表2(每2小时发布)" header-bordered hover-shadow>
                    <t-list :split="true">
                        <t-list-item>1. 当前整点时间对应水位</t-list-item>
                        <t-list-item>2. 昨日当前整点时间对应水位</t-list-item>
                        <t-list-item>3. 今日昨日两整点时间水位对比</t-list-item>
                    </t-list>
                    <template #footer>
                        <t-tooltip :content="message">
                            <t-button href="/api/table2" target="_blank">
                                <download-icon />点击下载
                            </t-button>
                        </t-tooltip>
                    </template>
                </t-card>
            </div>

            <t-divider />

            <div class="demo-card">
                <t-card class="c1" title="鸠江区三线水位测站记录情况登记表1(每日发布)" header-bordered hover-shadow>
                    <t-list :split="true">
                        <t-list-item>1. 今日 8:00 水位</t-list-item>
                        <t-list-item>2. 昨日 8:00 水位</t-list-item>
                        <t-list-item>3. 上周同期 8:00 水位</t-list-item>
                        <t-list-item>4. 去年同期 8:00 水位</t-list-item>
                        <t-list-item>5. 今日昨日8:00 水位对比</t-list-item>
                    </t-list>
                    <template #footer>
                        <t-tooltip :content="message">
                            <t-button href="/api/table1" target="_blank">
                                <download-icon />点击下载
                            </t-button>
                        </t-tooltip>
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
const message = "提示: 过整点10分钟后下载数据准确"
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