<template>
  <div class="slide">
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item v-for="item in links" :key="item.id" v-bind:index="item.id.toString()" @click="$goRoute(item.route)">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.text}}</span>
        </template>
      </el-menu-item>

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
      ]
    }
  },
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