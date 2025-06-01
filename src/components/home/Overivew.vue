<script setup lang="ts">
import Button from "@/components/common/Button.vue";
</script>

<template>
    <div class="wrap">
        <div class="contaion">
            <div class="section1">
                <h1>水位发布小助手</h1>
                <h2>助力实现效率飞跃</h2>
                <RouterLink to="/table"><Button>立即使用</Button></RouterLink>
            </div>
            <div class="section2">
                <img src="@/assets/pic/view.jpg" alt="pic">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
    background-color: #fff;
    height: 480px;

    .contaion {
        width: $content-width;
        margin: auto;
        padding-top: 60px;
        display: flex;
        align-items: center;

        .section1 {
            width: 660px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 60px 80px;

            h1 {
                margin-top: 40px;
                color: #43CF7C;
                text-align: center;
                font-size: 3em;
            }

            h2 {
                margin: 20px 0;
                color: #383838;
                text-align: center;
            }

            a {
                text-decoration: none;
            }
        }

        .section2 {
            width: $content-width - 660px;
            display: grid;
            place-items: center;

            img {
                width: 374px;
                height: 313px;
                margin: auto;
            }
        }
    }
}
</style>