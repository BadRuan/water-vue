<script lang="ts" setup>
import type { HistoryInter } from '@/model';

const history: HistoryInter[] = [
    {
        event_time: "2024.04.28",
        content: "根据工作内容，初步构思根据自动获取水位并一键生成防汛表格项目。"
    },
    {
        event_time: "2024.05.02",
        content: "实现支持一键生成水位表功能，采用电脑端软件方式。"
    },
    {
        event_time: "2024.05.06",
        content: "实现根据三线水位数据对应的高程，能在达到设防水位、警戒水位、保证水位高程时标注好对应的颜色。"
    },
    {
        event_time: "2024.06.23",
        content: "项目由电脑客户端软件调整为Web网页版本, 解决部分电脑无法运行客户端程序问题，适用性更强。"
    },
    {
        event_time: "2024.06.24",
        content: "采用TDesign前端框架更新界面, 功能界面，更加美观。"
    },
    {
        event_time: "2024.06.29",
        content: "为防汛高频次水位需求，增加支持每2小时、每1小时高频次发布需求。"
    },
    {
        event_time: "2024.07.05",
        content: "支持隐藏不需要显示的数据列。"
    },
    {
        event_time: "2024.09.21",
        content: "优化代码，精简代码结构，大道至简，仅留使用功能。"
    },
    {
        event_time: "2025.02.16",
        content: "针对安徽水信息网站反爬技术迭代，重构爬虫。"
    },
    {
        event_time: "2025.02.18",
        content: "对项目后端代码进行重构，方便后期迭代功能。"
    },
    {
        event_time: "2025.03.18",
        content: "调整采用AntDesignVue前端框架重构前端页面。"
    },
    {
        event_time: "2025.03.20",
        content: "增加水位数据、访客量、下载量动态显示。"
    },
    {
        event_time: "2025.03.24",
        content: "增加站点最新水位数据信息显示功能。"
    },
    {
        event_time: "2025.04.04",
        content: "抛弃前端视觉框架, 纯手写CSS重构鸠江小助手页面, 使得界面更加美观。"
    },
    {
        event_time: "2025.04.15",
        content: "项目使用京东云公网重新上线，不在局限一个工作地点，满足多地使用要求。"
    },
    {
        event_time: "2025.04.27",
        content: "增加表格3, 满足2025年5月汛期每3天一次水位发布需求。"
    },
    {
        event_time: "2025.05.27",
        content: "增加表格4, 满足2025年6月主汛期每1天一次水位发布需求。"
    },
    {
        event_time: "2025.06.2",
        content: "重新设计小助手界面样式，常换才能常新。"
    },
]

history.reverse()
</script>

<template>
    <div class="box">
        <div class="container">
            <div class="item" v-for="(item, index) in history" :key="index">
                <div class="author">
                    <div class="face_pic"><img src="@/assets/pic/avater.jpg" alt="author"></div>
                    <div class="author_txt">
                        <div class="author_name">我的袜子都是洞</div>
                        <div class="author_describe">Developers</div>
                    </div>
                </div>
                <div class="content">
                    <p>{{ item.content }}</p>
                    <div class="date">{{ item.event_time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    background-color: #fff;
    padding: 40px 0;

    .container {
        width: $content-width;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 40px;

        .item {
            margin: 80px 0;
            padding: 20px 32px;
            width: 800px;
            margin: auto;
            background-color: #F7F7F7;
            border-radius: 2px;
            box-shadow: 1px 1px 2px #9f9f9f;

            .author {
                display: flex;
                align-items: center;

                .face_pic {
                    width: 56px;
                    height: 56px;

                    img {
                        border-radius: 50%;
                        width: 100%;
                        height: 100%;
                    }
                }

                .author_txt {
                    margin-left: 32px;

                    .author_name {
                        font-size: 1.2em;
                        font-weight: bold;
                    }


                    .author_describe {
                        font-size: 0.8em;
                        color: #808080;
                        font-weight: bold;
                    }
                }
            }

            .content {
                p {
                    margin: 40px 20px;
                    color: #808080;
                    text-indent: 2em;
                }

                .date {
                    font-size: 0.8em;
                    color: #808080;
                    text-align: right;
                    margin: 20px 60px 0 0;
                    border-bottom: 1px solid #E5E5E5;
                }
            }
        }
    }
}
</style>