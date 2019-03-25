<template>
  <div class="three-module">
    <h2>我是子组件，要实现“子向父传值”</h2>
    <el-button @click="changeTitle">点击修改父组件的值</el-button>
    <p>点击后下面的值将发生改变</p>
    <p>{{msgOfP}}</p>
  </div>
</template>
<script>
export default {
  name: "three-module",
  props: ["msgOfP"],
  data() {
    return {};
  },
  methods: {
    changeTitle: function() {
      this.$emit("titleChanged", "改掉了，这是three-module子组件传过来的数据");
    }
  }
};
</script>
<style scoped>
.three-module {
  margin: 10px 0;
}
h2 {
  color: rgb(103, 168, 243);
  padding: 20px 0;
  background: #222;
}
</style>