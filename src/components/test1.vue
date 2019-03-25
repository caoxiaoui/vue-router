<template>
  <div class="second-module module-cont">
    <h3 class="txts-cont">
      <p class="info-p">! {{ msgOfP }}</p>
    </h3>
    <div>
      <p class="error">如果你想尝试更改父组件传过来的引用值，那么其他子组件中引用的值也会报错哦！</p>
    </div>
    <three-module v-bind:msgOfP="msgOfP" v-on:titleChanged="zidingyi($event)"></three-module>
  </div>
</template>
<script>
import Threemodule from "./test2";
export default {
  name: "second-module",
  components: {
    "three-module": Threemodule
  },
  props: {

  },
  data() {
    return {
      msgOfP: "我在second-module的子组件中，是three-module的父组件，一会儿three-module要修改我。"
    };
  },
  methods: {
    zidingyi(msg) {
      this.msgOfP = msg;
    }
  }
};
</script>
<style>
.error {
  color: #8771ff;
  font-weight: bold;
}
.second-module {
  background: #f5f5f5;
}
ul {
  background: white;
}
.module-cont {
  border: 2px solid rgb(0, 0, 27);
  border-radius: 5px;
}
.txts-cont {
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px solid rgb(0, 2, 26);
  background: #fff;
}
button:hover {
  cursor: pointer;
}
button:focus {
  outline: none;
}
</style>
<style scoped>
button {
  padding: 10px;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #4488ff;
  background: #4488ff;
}
button:hover {
  background: #3a76de;
}
.info-p {
  padding-top: 10px;
  font-size: 14px;
  color: red;
  border-top: 2px solid #dedede;
}
</style>