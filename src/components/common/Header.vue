<template>
    <div class="contain">
        <div class="header">
            <div class="logo"><img src="@/assets/logo.svg"></div>
            <nav>
                <li><img class="icon" src="@/assets/icon/nav/home-icon.svg">
                    <RouterLink to="/">首页</RouterLink>
                </li>
                <li><img class="icon" src="@/assets/icon/nav/table-icon.svg">
                    <RouterLink to="/table">水位表</RouterLink>
                </li>
                <li><img class="icon" src="@/assets/icon/nav/story-icon.svg">
                    <RouterLink to="/history">开发历程</RouterLink>
                </li>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.contain {
    background-color: #000000;
}

.header {
    margin: auto;
    width: 1400px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid black;
}

nav {
    display: flex;
    justify-content: center;
    gap: 16px;
}

nav li {
    list-style-type: none;
    width: 160px;
    height: 60px;
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav li .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
}

nav li a {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 27px;
    line-height: 27px;
    font-size: 18px;
    color: #FFF;
}

nav li:hover a {
    color: rgb(128, 128, 251);
}
</style>