<template>
  <div class="heade">
    <div class="logo">
      <img src="@/assets/avatar.gif" alt="">
    </div>
    <div class="setting">
      <div class="avatar">
        <img src="@/assets/avatar.gif" alt="">
      </div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <!-- 下拉菜单 -->
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">我的博客</el-dropdown-item>
          <el-dropdown-item command="c" divided @click="$goRoute('/')">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "heade",
  data() {
    return {
      heade: "header"
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>
<style scoped>
.logo img {
  height: 59px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.heade,.setting{
  height: 60px;
  display: flex;
  justify-content: space-between;
}
.avatar img{
  height: 59px;
}
.el-dropdown-menu{
  margin: 0;
}
.el-dropdown-link{
  display: block;
}
</style>
