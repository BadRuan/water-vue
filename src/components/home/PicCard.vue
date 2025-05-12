<script lang="ts" setup>
import { ref } from 'vue';
import type { InfoInter } from "@/model";
const info_list: InfoInter[] = [
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        describe: "新坝站更新改造完成，泵站冬修工作完成。新坝站更新改造完成，泵站冬修工作完成。新坝站更新改造完成，泵站冬修工作完成。",
        src: "src/assets/pic/1.jpg"
    },
    {
        title: "大桥站更新改造完成，泵站冬修工作完成。",
        describe: "大桥站更新改造完成，泵站冬修工作完成。",
        src: "src/assets/pic/2.jpg"
    },
    {
        title: "老坝站更新改造完成，泵站冬修工作完成。",
        describe: "泵站冬修工作完成。",
        src: "src/assets/pic/3.jpg"
    },
    {
        title: "裕溪站更新改造完成，泵站冬修工作完成。",
        describe: "裕溪站更新改造完成，泵站工程标准化工作推进显著。",
        src: "src/assets/pic/4.jpg"
    },
    {
        title: "雍镇站更新改造完成，泵站冬修工作完成。",
        describe: "雍镇站泵站工程标准化工作推进显著。",
        src: "src/assets/pic/5.jpg"
    },
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        describe: "泵站冬修工作完成。",
        src: "src/assets/pic/6.jpg"
    },
];

const index = ref(1);

const pre = () => {
    index.value = index.value - 1;
    if (index.value < 1) {
        index.value = 6;
    }
}

const next = () => {
    index.value = index.value + 1;
    if (index.value > 6) {
        index.value = 1;
    }
}

const play = () => {
    next()
}
</script>

<template>
    <div class="pic_list">
        <img :src="info_list[index].src">
        <div class="describe">
            <h3>{{ info_list[index].title }}</h3>
            <p>{{ info_list[index].describe }}</p>
        </div>
        <div class="pre" @click="pre">&lt;</div>
        <div class="next" @click="next">&gt;</div>
    </div>


</template>

<style lang="scss" scoped>
$box-height: 400px;
$box1-width: 700px;

.pic_list {
    width: $box1-width;
    height: $box-height;
    overflow: hidden;
    position: relative;

    img {
        width: $box1-width;
        height: $box-height;
        transition: scale 1s;

        &:hover {
            scale: 1.05;
        }
    }

    .describe {
        width: $box1-width;
        background-image: linear-gradient(to top, rgb(30, 30, 30), transparent);
        color: #fff;
        position: absolute;
        bottom: 0;
        padding: 0 40px;

        h3 {
            font-size: 0.9em;
            padding: 0;
            margin: 0;
        }

        p {
            margin: 20px 0px;
            font-size: 0.8em;
        }
    }

    .pre {
        position: absolute;
        font-size: 2em;
        left: 10px;
        top: 200px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #444343;
        border-radius: 100%;
        cursor: pointer;

        &:hover {
            background-color: #c4c4c4;
            color: #fff;
        }
    }

    .next {
        position: absolute;
        font-size: 2em;
        right: 10px;
        top: 200px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #444343;
        border-radius: 100%;
        cursor: pointer;

        &:hover {
            background-color: #c4c4c4;
            color: #fff;
        }
    }

}
</style>