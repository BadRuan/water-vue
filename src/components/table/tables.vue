<template>
    <div class="box1">
        <h2>Tables</h2>
        <h1>水位表</h1>
        <div class="line"></div>
    </div>

    <div class="table">
        <div class="card">
            <h2>三线水位记录登记表</h2>
            <ul>
                <li>1、 今日 8:00 水位</li>
                <li>2、 昨日 8:00 水位</li>
                <li>3、 上周同期 8:00 水位</li>
                <li>4、 去年同期 8:00 水位</li>
                <li>5、 今日昨日8:00 水位对比</li>
            </ul>
            <a href="/table/1" target="_blank" class="down"><img src="@/assets/icon/down-icon.svg">下载水位表</a>
        </div>
        <div class="card">
            <h2>三线水位记录登记表</h2>
            <ul>
                <li>1、 当前整点时间对应水位</li>
                <li>2、 4小时前整点时间对应水位</li>
                <li>3、 8小时前整点时间对应水位</li>
            </ul>
            <a href="/table/2" target="_blank" class="down"><img src="@/assets/icon/down-icon.svg">下载水位表</a>
        </div>
        <div class="card">
            <h2>三线水位记录登记表</h2>
            <ul>
                <li>1、 今日 8:00 水位</li>
                <li>2、 三日前 8:00 水位</li>
                <li>3、 两比水位差值</li>
                <li>4、 去年同期 8:00 水位</li>
            </ul>
            <a href="/table/3" target="_blank" class="down"><img src="@/assets/icon/down-icon.svg">下载水位表</a>
        </div>

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

.table {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.card {
    padding-top: 5px;
    background-color: #ffffff;
    width: 300px;
    height: 300px;
    box-shadow: 4px 4px 6px #a6a6a6;
}

.card:hover {
    background-color: #E9ECFE;
    color: #3B3EFF;
}

.card h2 {
    text-align: center;
    width: 276px;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    border-bottom: solid 1px #3B3EFF;
}

.card ul {
    margin-left: 20px;
    padding: 20px 0;
    width: 220px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card a {
    margin-left: 68px;
    display: inline-block;
    width: 160px;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    background-color: #1077FB;
    color: #fff;
    padding: 0 24px;
    border-radius: 4px;
}

.card a:hover {
    background-color: #4696ff;
}

.card a img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}
</style>