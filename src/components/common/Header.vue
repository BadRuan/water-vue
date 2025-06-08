<template>
    <div class="contain">
        <div class="header">
            <div class="logo"><img src="@/assets/logo.svg"></div>
            <nav>

                <RouterLink to="/" active-class="active">
                    <li>首页</li>
                </RouterLink>

                <RouterLink to="/table" active-class="active">
                    <li>水位表</li>
                </RouterLink>

                <RouterLink to="/log" active-class="active">
                    <li>更新日志</li>
                </RouterLink>

            </nav>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$header-width: $content-width;
$header-height: 60px;
$menu-text-color: rgb(26, 30, 35);
$hover-bg-color: rgb(246, 247, 248);
$background-color: #E5E5E5;

.contain {
    background-color: $background-color;
    box-shadow: 0 0 2px 2px rgb(170, 170, 170);
    margin: 0;
    padding: 0;
    top: 0;
    position: sticky;

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

            a {
                height: $header-height;
                line-height: $header-height;
                color: $menu-text-color;
                list-style: none;
                font-size: 1.2em;
                text-align: center;
                padding: 0px 20px;
                border-bottom: 2px solid $background-color;
                transition: all 1s;
                text-decoration: none;

                &:hover {
                    border-bottom: 4px solid $pcolor;
                    color: $pcolor;
                }
            }

            .active {
                border-bottom: 4px solid $pcolor;
                color: $pcolor;
            }

        }
    }
}
</style>