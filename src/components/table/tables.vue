<template>
    <div class="table">
        <div class="card">
            <h2>三线水位记录情况登记表</h2>
            <div class="line"></div>
            <ul>
                <li>1、 今日 8:00 水位</li>
                <li>2、 昨日 8:00 水位</li>
                <li>3、 上周同期 8:00 水位</li>
                <li>4、 去年同期 8:00 水位</li>
                <li>5、 今日昨日8:00 水位对比</li>
            </ul>
            <div class="line"></div>
            <a href="/table/1" target="_blank"  class="down"><img src="@/assets/icon/down-icon.svg">下载水位表</a>
        </div>
        <div class="card">
            <h2>三线水位记录情况登记表</h2>
            <div class="line"></div>
            <ul>
                <li>1、 当前整点时间对应水位</li>
                <li>2、 4小时前整点时间对应水位</li>
                <li>3、 8小时前整点时间对应水位</li>
            </ul>
            <div class="line"></div>
            <a href="/table/2" target="_blank"  class="down"><img src="@/assets/icon/down-icon.svg">下载水位表</a>
        </div>
        <div class="card">
            <h2>三线水位记录情况登记表</h2>
            <div class="line"></div>
            <ul>
                <li>1、 当前整点时间对应水位</li>
                <li>2、 4小时前整点时间对应水位</li>
                <li>3、 8小时前整点时间对应水位</li>
            </ul>
            <div class="line"></div>
            <a href="/table/2" target="_blank"  class="down"><img src="@/assets/icon/down-icon.svg">下载水位表</a>
        </div>
    </div>
</template>

<style scoped>
.table {
    margin: 60px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.card {
    width: 300px;
    height: 300px;
    padding: 40px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 2px 2px 2px rgb(178, 178, 178);
    display: flex;
    flex-direction: column;
}

.line {
    width: 260px;
    margin: 20px;
    border: 0.5px solid #2A82E4;
}

.card h2 {
    margin: 0 auto;
    padding: 0;
    font-size: 24px;
}

ul {
    margin-left: 20px;
}

ul li {
    margin: 4px 0;
}

.down {
    width: 160px;
    height: 40px;
    margin: 0 60px;
    padding-right: 10px;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    background-color: #1077FB;
    color: #fff;
    border-radius: 12px;
}

.down:hover {
    background-color: #63A6FC;
}

img {
    padding: 0 8px;
}
</style>