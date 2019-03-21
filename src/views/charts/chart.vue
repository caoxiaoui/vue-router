<template>
  <div id="chart">
    <div id="chart-line"></div>
    <div id="chart-bar"></div>
    <div id="chart-pie"></div>
  </div>
</template>
<script>
// import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$chart.line("chart-line");
    this.$chart.bar("chart-bar");
    this.$chart.pie("chart-pie");
  }
};
</script>
<style scoped>
#chart{
  text-align: left;
}
#chart-line,#chart-bar,#chart-pie {
  width: 100%;
  height: 300px;
}
</style>