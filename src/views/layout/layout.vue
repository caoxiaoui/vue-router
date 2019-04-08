<template>
  <el-container class="layout">
    <el-header>
      <heade/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <slide slidetext='侧边栏导航条'/>
      </el-aside>
      <el-main>
        <!-- <keep-alive> -->
          <router-view :key="$route.path"></router-view>
        <!-- </keep-alive> -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import heade from "./components/heade"
import slide from "./components/slide"
export default {
  name: "layout",
  components: {
    heade,
    slide
  },
  data() {
    return {
      key: "value"
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted(){
    console.log(this.$route.params.stats)
  }
}
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: left;
  line-height: 60px;
  border-bottom: 1px solid #666;
  box-shadow: 0px 0px 1px #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0;
  min-height: 895px;
  overflow: hidden;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
