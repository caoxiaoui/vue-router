<template>
  <div class="setting">
    <ul>
      <li v-for="item in links" :key="item.id" v-bind:index="item.id.toString()" @click="$goRoute(item.route)">
        {{item.text}}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '设置中心',
      links: [
        {
          id: 1,
          text: "列表1",
          route: "/layout/list"
        },
        {
          id: 2,
          text: "列表2",
          route: "/layout"
        },
        {
          id: 3,
          text: "列表3",
          route: "/layout/setting/aa"
        }
      ]
    }
  },
}
</script>

