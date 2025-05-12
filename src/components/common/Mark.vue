<template>
    <div class="content">
        <h2>
            <slot name="second"></slot>
        </h2>
        <h1>
            <slot name="first"></slot>
        </h1>
        <div class="line"></div>
    </div>
</template>

<style lang="scss" scoped>
$left-width: 40px;
$line-width: 64px;

.content {
    margin: 0 $left-width;
    padding: 40px 0;
    animation: move 1s;

    h2 {
        font-size: 1em;
        color: #383838;
    }

    .line {
        margin-top: 8px;
        width: 0;
        height: 2px;
        background-color: #2A82E4;
        transition: width 0.8s;
    }

    &:hover .line {
        width: $line-width;
    }
}

@keyframes move {
    0% {
        margin-left: 0;
    }

    100% {
        margin-left: $left-width;
    }
}
</style>