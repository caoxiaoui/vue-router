<template>
  <div class="setting">
    <ul>
      <!-- <li v-for="item in links" :key="item.id" v-bind:index="item.id.toString()" @click="$goRoute(item.route)" class="links">
        {{item.text}}
      </li> -->
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "设置中心",
      links: [
        {
          id: 1,
          text: "eCharts",
          route: "/layout/setting/chart"
        },
        {
          id: 2,
          text: "列表2",
          route: "/layout/setting/list"
        },
        {
          id: 3,
          text: "二级路由",
          route: "/layout/setting/aa"
        }
      ]
    };
  }
};
</script>
<style scoped>
.links {
  height: 30px;
  width: 100px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #fff;
  background: rgb(139, 172, 214);
  display: inline-block;
  cursor: pointer;
  margin: 4px;
}
</style>

