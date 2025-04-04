<template>
    <div class="prompt">
        <div>
            <h2>使 用</h2>
            <h2>提 示</h2>
        </div>
        <div class="line"></div>
        <div>
            <p>1、各测站水位数据具体更新时间间隔不一，5分钟、10分钟、20分钟一次情况均有，一般整点水位数据都有。</p>
            <p>2、安徽省水信息网站更新水位数据，需要等测站数据上传成功，所以数据晚几分钟获取到属于正常情况。</p>
            <p>3、水信息网站最新显示数据一般取的是最近的一条，比如 8:00 没有数据，就会使用 7:55 的数据显示。</p>
            <p>4、本站严格使用目标时间准确数据，有直接用，没有的就填写 0。</p>
        </div>
    </div>
</template>

<style scoped>
.prompt {
    margin: 20px auto;
    width: 1200px;
    height: 280px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 2px 2px 2px rgb(178, 178, 178);
    display:flex;
    align-items: center;
    padding: 0 80px;
}

.prompt h2 {
    margin: 10px;
    text-align: center;
    color: #2A82E4;
    font-size: 40px;
}

.line {
    height: 180px;
    border: 0.5px solid #002652;
    margin: 0 60px;
}
div p {
    font-size: 20px;
}
</style>