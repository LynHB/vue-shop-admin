<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <div id="main" style="width: 600px;height: 400px"></div>
    </el-card>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'Report',
  dat() {
    return {}
  },
  created() {
  },
  // 此时页面元素已经被渲染完毕
  mounted() {
    const myCharts = echarts.init(document.getElementById('main'))
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    }
    myCharts.setOption(option)
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
