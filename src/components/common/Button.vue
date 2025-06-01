<template>
    <div>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<style lang="scss" scoped>
div {
    background-color: $pcolor;
    text-align: center;
    border-radius: 2px;
    width: 160px;

    span {
        display: inline;
        height: 42px;
        font-size: 1.1em;
        line-height: 42px;
        color: #fff;
        padding: 0 20px;
    }

    &:hover {
        background-color: #4080FF;
    }
}
</style>