<template>
  <div class="home">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in carousels" :key="item">
        <!-- <h3>{{ item }}</h3> -->
        <img :src="item" alt="" style="height:100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
//加载图片
import imgUrl0 from "@/assets/image.jpg"
import imgUrl1 from "@/assets/avatar.gif"
import imgUrl2 from "@/assets/logo.png"
//加载图片

export default {
  data() {
    return {
      compontents: {},
      //接收加载的图片
      carousels: [imgUrl0,imgUrl1,imgUrl2]
    }
  },
  methods: {
  },
  created() {
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>