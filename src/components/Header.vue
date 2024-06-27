<template>
    <t-header>
        <t-head-menu theme="dark" default-value="home" height="150px">
            <t-menu-item to="/" value="home"> 首页 </t-menu-item>
            <t-menu-item to="/story" value="story"> 开发历程 </t-menu-item>
            <t-menu-item to="/next" value="next"> 下步计划 </t-menu-item>
            <t-menu-item value="overview" :disabled="true"> 数据总览 </t-menu-item>
        </t-head-menu>
    </t-header>
</template>
