/**
 * 各种画echarts图表的方法都封装在这里
 */

import echarts from 'echarts'
const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          //画一条简单的线
          line1: function (id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {
              title: {
                text: '折线图堆叠'
              },
              tooltip: {
                trigger: 'axis'
              },
              legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                  name: '邮件营销',
                  type: 'line',
                  stack: '总量',
                  data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                  name: '联盟广告',
                  type: 'line',
                  stack: '总量',
                  data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                  name: '视频广告',
                  type: 'line',
                  stack: '总量',
                  data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                  name: '直接访问',
                  type: 'line',
                  stack: '总量',
                  data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                  name: '搜索引擎',
                  type: 'line',
                  stack: '总量',
                  data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
              ]
            };

            this.chart.setOption(optionData);
          },
          bar: function (id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {
              tooltip: {
                trigger: 'axis'
              },
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                name: 'value',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'bar',
                smooth: true
              }]
            };

            this.chart.setOption(optionData);
          },
        }
      }
    }
  })
}

export default {
  install
}
