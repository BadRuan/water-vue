<template>
    <div class="box">
        <div class="contain">
            <h2>
                <img src="@/assets/icon/General-icons_24pt_pin.svg" alt="icon">
                <span>使用提示</span>
            </h2>
            <div class="txt">
                <p>
                    1、各测站水位数据具体更新频率不一，一般整点水位数据都有。
                </p>
                <p>
                    2、数据同步于安徽省水信息网站更新水位数据，晚几分钟获取到属于正常情况。</p>
                <p>
                    3、安徽省水信息网站最新显示数据一般取的最近一条数据，如果没有 8:00 数据，就会使用 8:00 前最近的数据。
                </p>
                <p>
                    4、本站严格使用目标时间准确数据，没有的就默认填 0。
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    background-color: #fff;

    .contain {
        width: $content-width;
        margin: auto;
        overflow: hidden;

        h2 {
            height: 1em;
            line-height: 1em;
            margin: 20px 0;
            padding-left: 40px;

            span {
                font-size: 1em;
                margin-left: 12px;
            }
        }

        .txt {
            margin: 0 80px;
            padding-bottom: 40px;

            p {
                font-size: 1.2em;
                padding: 8px 0;
                border-bottom: 1px solid rgb(226, 226, 226);
            }
        }
    }
}
</style>