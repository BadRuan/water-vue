<script lang="ts" setup>
import Mark from '@/components/common/Mark.vue';
import type { HistoryInter } from '@/model';

const history_2024: HistoryInter[] = [
    {
        event_time: "04.28",
        content: "初步构思自动获取水位自动生成防汛表格项目"
    },
    {
        event_time: "05.02",
        content: "支持一键生成水位表"
    },
    {
        event_time: "05.06",
        content: "支持根据三线水位数据自动标注对应颜色"
    },
    {
        event_time: "06.23",
        content: "项目由客户端调整为Web版本, 解决部分电脑客户端无法运行程序问题。"
    },
    {
        event_time: "06.24",
        content: "采用TDesign更新界面, 更加美观。"
    },
    {
        event_time: "06.29",
        content: "支持每2小时、每1小时高频次发布需求。"
    },
    {
        event_time: "07.05",
        content: "支持隐藏不需要显示的数据列。"
    },
    {
        event_time: "09.21",
        content: "大道至简，仅留使用功能。"
    }
]
const history_2025: HistoryInter[] = [
    {
        event_time: "02.16",
        content: "针对水信息网站反爬技术迭代，重构爬虫"
    },
    {
        event_time: "02.18",
        content: "对FastApi后端代码进行重构"
    },
    {
        event_time: "03.18",
        content: "采用AntDesignVue重构前端页面"
    },
    {
        event_time: "03.20",
        content: "增加水位数据、访客量、下载量动态显示"
    },
    {
        event_time: "03.24",
        content: "增加站点最新水位数据信息显示功能"
    },
    {
        event_time: "04.04",
        content: "抛弃框架, 纯手写CSS重构鸠江小助手页面, 界面更加美观"
    },
    {
        event_time: "04.15",
        content: "项目使用京东云公网重新上线"
    },
    {
        event_time: "04.27",
        content: "增加表格3, 满足3天一次水位发布需求"
    }
]
</script>

<template>
    <div class="container">
        <Mark>
            <template #first>开发历程</template>
            <template #second>History</template>
        </Mark>

        <div class="box">
            <div class="year">
                <div class="year-item">2024</div>
                <img src="@/assets/icon/circle-icon.svg">
            </div>
            <div class="items" v-for="(item, index) in history_2024" :key="index">
                <div class="item">
                    <div class="date">{{ item.event_time }}</div>
                    <p>{{ item.content }}</p>
                </div>
            </div>
            <div class="year">
                <div class="year-item">2025</div>
                <img src="@/assets/icon/circle-icon.svg">
            </div>
            <div class="items" v-for="(item, index) in history_2025" :key="index">
                <div class="item">
                    <div class="date">{{ item.event_time }}</div>
                    <p>{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: $content-width;
    margin: auto;
    ;

    .box {
        margin: 20px 60px;


        .year {
            margin: 20px 0 0 0;
        }

        .year,
        .item {
            display: flex;
            align-items: center;


            .date {
                width: 110px;
                padding: 0 10px;
                font-size: 18px;
                line-height: 40px;
                text-align: center;
            }

            p {
                padding: 0 40px;
                line-height: 40px;
                border-left: 2px dashed #3071F2;
                font-size: 20px;
                width: 1200px;
            }

            &:hover .date {
                background-color: #E9ECFE;
                color: #3B3EFF;
            }

            &:hover p {
                border-left: 2px solid #3071F2;
                background-color: #E9ECFE;
                color: #3B3EFF;
            }
        }

        .year-item {
            width: 100px;
            font-size: 24px;
            line-height: 40px;
            font-weight: bold;
            text-align: center;
        }

        .year img {
            width: 20px;
            height: 20px;
            line-height: 16px;
        }
    }
}
</style>