<script setup>
import { reactive } from 'vue'

const articles = reactive([
  {
    date: '2024/6/11',
    content: '端午节后，收假开启工作的第一天，也构思新项目启程的一天，一定不能浮躁，好好写新项目，戒骄戒躁，才能平稳进步。边开发边学，边学边开发，深入理解渐进式理念。'
  },
  {
    date: '2024/6/12',
    content: '想来想去还是决定使用vue3直接搞。'
  },
  {
    date: '2024/6/13',
    content: '决定使用elemeui-plus框架'
  }
])

</script>

<template>

  <h1>开发日志</h1>


  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </el-col>

    <el-col :span="12">

      <el-timeline style="max-width: 600px;">

        <el-timeline-item timestamp="2024/6/11" placement="top">
          开发启程
        </el-timeline-item>

        <el-timeline-item v-for="(article, index) in articles" :key="index" :timestamp="article.date" placement="top">
          <el-card>
            <h4>{{ article.content }}</h4>
          </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2024/6/14" placement="top">
          现在
        </el-timeline-item>

      </el-timeline>

    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>

</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

h1 {
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
</style>