<script lang="ts" setup>
import Mark from '@/components/common/Mark.vue';
import Prompt from '@/components/table/Prompt.vue';
import Tables from '@/components/table/Tables.vue';
import recently from '@/components/table/Recently.vue';
</script>

<template>
    <div class="contain">
        <Mark>
            <template #first>使用提示</template>
            <template #second>Prompt</template>
        </Mark>

        <Prompt />

        <Mark>
            <template #first>水位表</template>
            <template #second>Tables</template>
        </Mark>

        <Tables />

        <Mark>
            <template #first>最新水位</template>
            <template #second>Recently</template>
        </Mark>

        <recently />
    </div>
</template>

<style lang="scss" scoped>
.contain {
    margin: 0 auto;
    width: $content-width;
}
</style>