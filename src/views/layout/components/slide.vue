<template>
  <div class="slide">
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item v-for="item in links" :key="item.id" v-bind:index="item.id.toString()" @click="$goRoute(item.route)">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.text}}</span>
        </template>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>eCharts</span>
          <!-- <span>{{slidetext}}</span> -->
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="link in links2" :key="link.id" v-bind:index="link.id.toString()" @click="$goRoute(link.route)">{{link.text}}</el-menu-item>
          <!-- <el-menu-item>Table</el-menu-item>
          <el-menu-item>二级</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          text: "首页",
          icon: 'el-icon-location',
          route: "/layout/home"
        },
        {
          id: 2,
          text: "Table",
          icon: 'el-icon-tickets',
          route: "/layout/list"
        },
        {
          id: 3,
          text: "组件传值",
          icon: 'el-icon-sort',
          route: "/layout/test1"
        }
      ],
      links2: [
        {
          id: '3-1',
          text: "eCharts",
          route: "/layout/setting/chart"
        },
        {
          id: '3-2',
          text: "Table",
          route: "/layout/setting/list"
        },
        {
          id: '3-3',
          text: "折叠面板",
          route: "/layout/setting/coll"
        }
      ]
    }
  },
  props:['slidetext'],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted(){
  }
}
</script>
<style scoped>
.slide .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  padding: 0;
  min-height: 895px;
  border-right: solid 1px #545c64;
}
</style>
