<template>
    <div class="box">
        <div class="card">
            <h3>数据频次</h3>
            <p>各水文测站水位数据更新频率不一, 一般整点的水位数据都有。</p>
        </div>

        <div class="card">
            <h3>数据延迟</h3>
            <p>本站数据同步于安徽省水信息网站, 晚几分钟获取到属于正常情况。</p>
        </div>

        <div class="card">
            <h3>准确性</h3>
            <p>安徽省水信息网站最新显示数据一般取的最近一条数据, 如果没有 8:00 数据，就会使用 8:00 前最近的数据。</p>
            <p>本站严格使用目标时间准确数据, 没有的就默认填 0。</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.box {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 40px;

    .card {
        background-color: rgb(247, 249, 252);
        width: 320px;
        height: 200px;
        border-radius: 12px;


        h3 {
            text-align: center;
            padding: 20px 0;
            border-bottom: dashed .5px #dedede;
        }

        p {
            margin: 10px 20px;
            color: rgb(100, 118, 114);
            text-indent: 2em;
        }

        &:hover {
            background-color: rgb(241, 245, 249);
        }
    }
}
</style>