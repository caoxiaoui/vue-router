/**
 * 各种画echarts图表的方法都封装在这里
 */
//导入eCharts
import echarts from 'echarts'
const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          line: function (id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {
              title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x: 'left'
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
              lineStyle: {
                // color: {
                //   type: 'linear',
                //   x: 0,
                //   y: 0,
                //   x2: 0,
                //   y2: 1,
                //   colorStops: [{
                //     offset: 0,
                //     color: 'red' // 0% 处的颜色
                //   }, {
                //     offset: 1,
                //     color: 'blue' // 100% 处的颜色
                //   }],
                //   global: false // 缺省为 false
                // }
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
              itemStyle: {
                // color:['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
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
          pie: function (id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {
              title: {
                // text: '某站点用户访问来源',
                // subtext: '纯属虚构',
                // x: 'center'
              },
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              itemStyle: {
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
              },
              series: [{
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [{
                    value: 335,
                    name: '直接访问'
                  },
                  {
                    value: 310,
                    name: '邮件营销'
                  },
                  {
                    value: 234,
                    name: '联盟广告'
                  },
                  {
                    value: 135,
                    name: '视频广告'
                  },
                  {
                    value: 1548,
                    name: '搜索引擎'
                  }
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }]
            };

            this.chart.setOption(optionData);
          }
        }
      }
    }
  })
}

export default {
  install
}
