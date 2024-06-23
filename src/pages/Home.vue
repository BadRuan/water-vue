<template>
    <h1>鸠江水位小助手</h1>

    <el-row :gutter="20">
        <el-col :span="6">
            <h2>简单</h2>
            <p>使用简单，单击即可</p>
        </el-col>
        <el-col :span="6">
            <h2>准确</h2>
            <p>数据来源可靠（安徽水信息网站）</p>
        </el-col>
        <el-col :span="6">
            <h2>高效</h2>
            <p>立即出表，无需等待</p>
        </el-col>
        <el-col :span="6">
            <h2>便捷</h2>
            <p>跨平台，无局限</p>
        </el-col>

    </el-row>

    <el-divider />

    <el-descriptions title="基础信息">
        <el-descriptions-item label="软件名称">鸠江水位小助手</el-descriptions-item>
        <el-descriptions-item label="解决痛点">人工查找水信息网站水文站水位数据，费时费力且容易发生数据摘抄错误。</el-descriptions-item>
        <el-descriptions-item label="使用要求">在区水务局局域网内使用</el-descriptions-item>
        <el-descriptions-item label="简介">
            一键生成以当前日期命名的鸠江区水位三线表格文件，填好表格内日期及相应水位数据，水位数据会根据是否达三线水位的情况自动标好颜色。
        </el-descriptions-item>
    </el-descriptions>

    <el-divider />
    <div class="mb-4">
        <span>今日鸠江区三线水位测站记录情况登记表： </span><el-link href="/api/table" target="_blank"><el-button  type="primary">立即获取</el-button></el-link>
    </div>

</template>


<style>
h1 {
    text-align: center;
}

h2 {
    text-align: center;
}

p {
    text-align: center;
}

.mb-4 {
    margin: 0 auto;
    text-align: center;
}
</style>