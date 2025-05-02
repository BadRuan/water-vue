<template>
    <div class="box1">
        <h2>Prompt</h2>
        <h1>使用提示</h1>
        <div class="line"></div>
    </div>

    <div class="box2">
        <p>1、各水文测站水位数据更新频率不一, 一般整点的水位数据都有。</p>
        <p>2、本站数据同步于安徽省水信息网站, 晚几分钟获取到属于正常情况。</p>
        <p>3、安徽省水信息网站最新显示数据一般取的最近一条数据, 如果没有 8:00 数据，就会使用 8:00 前最近的数据。</p>
        <p>4、本站严格使用目标时间准确数据, 没有的就默认填 0。</p>
    </div>
</template>

<style scoped>
.box1 {
    margin-top: 60px;
    margin-left: 20px;
    margin-bottom: 40px;
}

.box1 h1 {
    font-size: 28px;

}

.box1 h2 {
    font-size: 20px;
    color: #383838;
}

.line {
    width: 60px;
    height: 8px;
    border-bottom: 2px solid #2A82E4;
}

.box2 {
    margin: 0 80px;
}

.box2 p {
    padding: 0 20px;
    width: 1200px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
}

.box2 p:hover {
    background-color: #E9ECFE;
    color: #3B3EFF;
}
</style>