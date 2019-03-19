<template>
  <div id="chart">
    <div id="chart1"></div>
    <div id="chart-bar"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$chart.line1("chart1");
    this.$chart.bar("chart-bar");
  }
};
</script>
<style scoped>
#chart{
  text-align: left;
}
#chart1,#chart-bar {
  width: 100%;
  height: 300px;
}
</style>