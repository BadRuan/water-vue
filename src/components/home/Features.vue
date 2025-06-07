<template>
    <div class="box">
        <div class="t1">功能 特点</div>
        <div class="t2">效率为本，稳定第一</div>
    </div>

    <div class="card">
        <div class="card-item">
            <div class="part1">
                <div class="num">01</div>
                <div class="overview">数据可靠</div>
            </div>
            <div class="line"></div>
            <div class="description">
                <p>24h自动实时提取安徽省水信息网站防汛站点水位数据。</p>
                <p>满足鸠江区所需<span class="sp1">芜湖</span>、<span class="sp1">凤凰颈闸下</span>、<span class="sp1">裕溪闸下</span>、<span
                        class="sp1">裕溪闸上</span>、<span class="sp1">清水</span>、<span class="sp1">新桥闸上</span>共<span
                        class="sp1">6</span>个水文站点数据。</p>
            </div>
        </div>
        <div class="card-item">
            <div class="description">
                <p>按要求在水位表中准确填好水位数据，并能根据测站水位数据自动对比<span class="sfsw">设防水位</span>、<span class="jjsw">警戒水位</span>、<span
                        class="bzsw">保证水位</span>线标注好颜色。</p>
                <p>根据防汛需要有多种水位表下载，完美满足防汛需要。</p>
            </div>
            <div class="line"></div>
            <div class="part1">
                <div class="num">02</div>
                <div class="overview">功能齐全</div>
            </div>
        </div>
        <div class="card-item">
            <div class="part1">
                <div class="num">03</div>
                <div class="overview">使用便捷</div>
            </div>
            <div class="line"></div>
            <div class="description">
                <p>所见即所得，无学习和使用门槛。</p>
                <p>助力实现“鸠江区防汛水位报表秒级输出”的效率飞跃。</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    margin: auto;
    padding: 40px 0;
    background-color: $bgcolor;

    .t1 {
        margin: auto;
        text-align: center;
        font-weight: bold;
        font-size: 28px;
        margin: 20px 0;
    }

    .t2 {
        margin: auto;
        text-align: center;
        font-style: italic;
        font-size: 20px;
        color: #808080;
    }
}

.card {
    background-color: $bgcolor;
    display: flex;
    flex-direction: column;
    margin: auto;

    .card-item {
        margin: 20px auto;
        width: 1000px;
        height: 240px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 120px;
        background-color: #fff;
        border-bottom: .5px solid rgb(213, 213, 213);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        .part1 {
            display: flex;
            flex-direction: column;
            gap: 32px;

            .num {
                margin-left: 100px;
                color: #2A82E4;
                font-size: 52px;
                font-weight: bold;
            }

            .overview {
                font-size: 36px;
            }
        }

        .line {
            height: 180px;
            width: .5px;
            background-color: #2A82E4;
            transform: rotate(9deg);
        }

        .description {
            width: 500px;

            p {
                text-indent: 42px;
                font-size: 20px;
                font-family: 'Douyin Sans';
                margin: 10px 0;


                .sp1 {
                    color: #2A82E4;
                    font-weight: bold;
                }

                .sfsw {
                    color: blue;
                }

                .jjsw {
                    color: blue;
                    font-weight: bold;
                }

                .bzsw {
                    color: red;
                    font-weight: bold;
                }
            }
        }

    }
}
</style>