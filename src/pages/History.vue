<script lang="ts" setup>
import type { HistoryInter } from '@/model';

const history: HistoryInter[] = [
    {
        event_time: "2024.04.28",
        content: "初步构思自动获取水位自动生成防汛表格项目"
    },
    {
        event_time: "2024.05.02",
        content: "支持一键生成水位表"
    },
    {
        event_time: "2024.05.06",
        content: "支持根据三线水位数据自动标注对应颜色"
    },
    {
        event_time: "2024.06.23",
        content: "项目由客户端调整为Web版本, 解决部分电脑客户端无法运行程序问题。"
    },
    {
        event_time: "2024.06.24",
        content: "采用TDesign更新界面, 更加美观。"
    },
    {
        event_time: "2024.06.29",
        content: "支持每2小时、每1小时高频次发布需求。"
    },
    {
        event_time: "2024.07.05",
        content: "支持隐藏不需要显示的数据列。"
    },
    {
        event_time: "2024.09.21",
        content: "大道至简，仅留使用功能。"
    },
    {
        event_time: "2025.02.16",
        content: "针对水信息网站反爬技术迭代，重构爬虫"
    },
    {
        event_time: "2025.02.18",
        content: "对FastApi后端代码进行重构"
    },
    {
        event_time: "2025.03.18",
        content: "采用AntDesignVue重构前端页面"
    },
    {
        event_time: "2025.2025.03.20",
        content: "增加水位数据、访客量、下载量动态显示"
    },
    {
        event_time: "2025.03.24",
        content: "增加站点最新水位数据信息显示功能"
    },
    {
        event_time: "2025.04.04",
        content: "抛弃框架, 纯手写CSS重构鸠江小助手页面, 界面更加美观"
    },
    {
        event_time: "2025.04.15",
        content: "项目使用京东云公网重新上线"
    },
    {
        event_time: "2025.04.27",
        content: "增加表格3, 满足3天一次水位发布需求"
    },
    {
        event_time: "2025.05.27",
        content: "增加表格4, 满足1天一次水位发布需求"
    }
]
</script>

<template>
    <div class="box">
        <div class="container">
            <div class="item" v-for="(item, index) in history" :key="index">
                <h2>{{ item.event_time }} 更新</h2>
                <div class="describe">更新内容：</div>
                <p>{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    background-color: $bgcolor;
    padding: 40px 0;

    .container {
        width: $content-width;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .item {
            margin: 80px 0;
            width: 800px;
            height: 180px;
            margin: auto;
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 2px 2px 5px #888888;

            h2 {
                padding: 40px 0 20px 80px;
                font-size: 1.4em;
            }

            .describe {
                padding: 0 0 10px 80px;
                font-size: 1em;
                font-weight: bold;
            }

            p {
                padding: 0 80px 60px 114px;
                color: rgb(96, 96, 96);
            }
        }
    }
}
</style>