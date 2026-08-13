<template>
    <div class="w-6xl my-12 m-auto">
        <div class="m-4 text-center text-gray-900 text-2xl font-bold">鸠江区三线水位测站记录情况登记表</div>
        <div class="my-4 text-center text-gray-600">下方点击一键下载成品表格</div>

        <div class="my-4 grid grid-cols-4 gap-20 justify-around">
            <div class="bg-white p-4 rounded-xl flex flex-col">
                <div class="flex flex-row items-center">
                    <img src="/icon/table.svg" alt="table-icon">
                    <div class="mx-2 text-sm">鸠江区三线水位表</div>
                </div>
                <div class="my-4 bg-gray-200 h-[0.5px]"></div>
                <ul class="text-gray-600 text-sm ">
                    <li>1、 今日 8:00 水位</li>
                    <li>2、 昨日 8:00 水位</li>
                    <li>3、 上周同期 8:00 水位</li>
                    <li>4、 去年同期 8:00 水位</li>
                    <li>5、 今日昨日8:00 水位对比</li>
                </ul>
                <div class="my-4 bg-gray-200 h-[0.5px]"></div>
                <a class="m-auto flex flex-row items-center bg-gray-200 hover:bg-gray-100 px-2 py-1 rounded-xl"
                    href="/table/1" target="_blank">
                    <img src="/icon/down.svg" alt="download">
                    <div class="text-primary-300 mx-2 text-sm">获取表格</div>
                </a>
            </div>

            <div class="bg-white p-4 rounded-xl flex flex-col">
                <div class="flex flex-row items-center">
                    <img src="/icon/table.svg" alt="table-icon">
                    <div class="mx-2 text-sm">鸠江区三线水位表</div>
                </div>
                <div class="my-4 bg-gray-200 h-[0.5px]"></div>
                <ul class="text-gray-600 text-sm ">
                    <li>1、 当前整点水位</li>
                    <li>2、 前 4 小时水位</li>
                    <li>3、 前 8 小时水位</li>
                </ul>
                <div class="my-4 bg-gray-200 h-[0.5px]"></div>
                <a class="m-auto flex flex-row items-center bg-gray-200 hover:bg-gray-100 px-2 py-1 rounded-xl"
                    href="/table/2" target="_blank">
                    <img src="/icon/down.svg" alt="download">
                    <div class="text-primary-300 mx-2 text-sm">获取表格</div>
                </a>
            </div>

            <div class="bg-white p-4 rounded-xl flex flex-col">
                <div class="flex flex-row items-center">
                    <img src="/icon/table.svg" alt="table-icon">
                    <div class="mx-2 text-sm">鸠江区三线水位表</div>
                </div>
                <div class="my-4 bg-gray-200 h-[0.5px]"></div>
                <ul class="text-gray-600 text-sm ">
                    <li>1、 今日 8:00 水位</li>
                    <li>2、 三日前 8:00 水位</li>
                    <li>3、 两比涨落</li>
                    <li>4、 去年同期 8:00 水位</li>
                </ul>
                <div class="my-4 bg-gray-200 h-[0.5px]"></div>
                <a class="m-auto flex flex-row items-center bg-gray-200 hover:bg-gray-100 px-2 py-1 rounded-xl"
                    href="/table/3" target="_blank">
                    <img src="/icon/down.svg" alt="download">
                    <div class="text-primary-300 mx-2 text-sm">获取表格</div>
                </a>
            </div>

            <div class="bg-white p-4 rounded-xl flex flex-col">
                <div class="flex flex-row items-center">
                    <img src="/icon/table.svg" alt="table-icon">
                    <div class="mx-2 text-sm">鸠江区三线水位表</div>
                </div>
                <div class="my-4 bg-gray-200 h-[0.5px]"></div>
                <ul class="text-gray-600 text-sm ">
                    <li>1、 今日 8:00 水位</li>
                    <li>2、 昨日 8:00 水位</li>
                    <li>3、 两比涨落</li>
                    <li>4、 去年同期 8:00 水位</li>
                </ul>
                <div class="my-4 bg-gray-200 h-[0.5px]"></div>
                <a class="m-auto flex flex-row items-center bg-gray-200 hover:bg-gray-100 px-2 py-1 rounded-xl"
                    href="/table/4" target="_blank">
                    <img src="/icon/down.svg" alt="download">
                    <div class="text-primary-300 mx-2 text-sm">获取表格</div>
                </a>
            </div>
        </div>
    </div>
</template>