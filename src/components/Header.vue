<template>
    <header>
        <p>工作小助手</p>
        <nav>
            <ul class="wrapper">
                <li>首页</li>
                <li>功能详情</li>
                <li>代办清单</li>
                <li>工作进展</li>
                <li>工作日志</li>
                <li>开发历程</li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
}

.wrapper li {
    text-align: center;
    list-style: none;
    line-height: 100px;
}
</style>