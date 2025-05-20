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
$header-height: 60px;
$menu-text-color: rgb(26, 30, 35);
$hover-bg-color: rgb(246, 247, 248);

.contain {
    background-color: #fff;
    border: 1px solid #a7a7a7;
    box-shadow: 0 0 2px 1px rgb(132, 132, 132);
    margin: 0;
    padding: 0;
    // top: 0;
    // position: sticky;

    .header {
        margin: auto;
        width: $header-width;
        height: $header-height;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            margin-top: 10px;
            height: $header-height;
        }

        nav {
            display: flex;
            gap: 16px;

            li {
                height: 40px;
                line-height: 40px;
                color: $menu-text-color;
                list-style: none;
                font-size: 1.2em;
                text-align: center;
                border-radius: 12px;
                padding: 0px 20px;
                border: .5px solid #fff;

                &:hover {
                    background-color: $hover-bg-color;
                    border: .5px solid #a7a7a7;
                }

                a {
                    color: $menu-text-color;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>