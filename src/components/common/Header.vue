<template>
    <div class="contain">
        <div class="header">
            <div class="logo"><img src="@/assets/logo.svg"></div>
            <nav>
                <li>
                    <RouterLink to="/">首页</RouterLink>
                </li>
                <li>
                    <RouterLink to="/table">水位表</RouterLink>
                </li>
                <li>
                    <RouterLink to="/history">开发历程</RouterLink>
                </li>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$header-width: 1200px;
$header-height: 80px;

.contain {
    background-color: #000000;

    .header {
        margin: auto;
        width: $header-width;
        height: $header-height;
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav {
            display: flex;
            justify-content: center;
            gap: 16px;

            li {
                height: 32px;
                line-height: 32px;
                color: #FFF;
                list-style: none;
                font-size: 1.2em;
                text-align: center;
                border-radius: 4px;
                padding: 0px 20px;


                a {
                    color: #FFF;
                    text-decoration: none;
                    font-family: 'Douyin Sans';
                }
            }
        }
    }
}
</style>