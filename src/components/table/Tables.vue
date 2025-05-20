<template>
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
                <li>1、 当前整点对应水位</li>
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

<style lang="scss" scoped>
$card-width: 300px;
$card-height: 48px;

.table {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .card {
        padding-top: 36px;
        background-image: linear-gradient(to top, rgb(237, 246, 255), rgb(255, 255, 255));
        width: $card-width;
        height: 320px;
        border-radius: 8px;
        transition: transform .5s;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

        h2 {
            img {
                width: 30px;
                height: 30px;
            }

            text-align: center;
            width: $card-width;
            height: $card-height;
            font-size: 1.6em;

            border-bottom: dashed 1px #dedede;
        }

        ul {
            margin-left: 20px;
            padding: 20px 0px;
            width: 220px;
            height: 160px;
            color: rgb(93, 93, 93);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            list-style-type: none;
            font-family: 'Douyin Sans';
        }

        a {
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
            text-decoration: none;

            img {
                width: 16px;
                height: 16px;
                margin-right: 10px;
            }

            &:hover {
                background-color: #4696ff;
            }
        }

        &:hover {
            transform: translate(0px, -4px);
            box-shadow: 4px 4px 6px #a6a6a6;
        }

    }


}
</style>