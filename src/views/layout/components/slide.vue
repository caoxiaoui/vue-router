<template>
  <div class="slide">
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item v-for="item in links" :key="item.id" v-bind:index="item.id.toString()" @click="$goRoute(item.route)">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.text}}</span>
        </template>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>eCharts</span>
          <span>{{slidetext}}</span>
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
          route: "/layout/home"
        },
        {
          id: 2,
          text: "Table",
          route: "/layout/list"
        },
        {
          id: 3,
          text: "图标",
          route: "/layout/setting"
        }
      ],
      links2: [
        {
          id: '4-1',
          text: "eCharts",
          route: "/layout/setting/chart"
        },
        {
          id: '4-2',
          text: "Table",
          route: "/layout/setting/list"
        },
        {
          id: '4-3',
          text: "二级路由",
          route: "/layout/setting/aa"
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
      console.log(key, keyPath);
    }
  },
  mounted(){
  }
}
</script>