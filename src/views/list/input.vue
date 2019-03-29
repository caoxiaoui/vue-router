<template>
  <div class="ipt">
    <div class="form-ipt">
      <h4 class="title">单选</h4>
      <div class="ipt-out">
        <el-radio v-model="radio" label="1" class="radio-ipt">单选项1</el-radio>
        <el-radio v-model="radio" label="2" class="radio-ipt">单选项2</el-radio>
      </div>
      <div class="ipt-out">
        <el-radio v-model="radio7" label="1" border>单选项1</el-radio>
        <el-radio v-model="radio7" label="2" border>单选项2</el-radio>
      </div>
      <div class="ipt-out">
        <el-radio v-model="radio8" label="1" border size="medium">单选项1</el-radio>
        <el-radio v-model="radio8" label="2" border size="medium">单选项2</el-radio>
      </div>
      <div class="ipt-out">
        <el-radio-group v-model="radio9" size="small" @change="radioipt">
          <el-radio label="1" border>单选项1</el-radio>
          <el-radio label="2" border>单选项2</el-radio>
        </el-radio-group>
      </div>
      <div class="ipt-out">
        <el-radio-group v-model="radio10" size="mini">
          <el-radio label="1" border>单选项1</el-radio>
          <el-radio label="2" border>单选项2</el-radio>
        </el-radio-group>
      </div>
      <div class="ipt-out">
        <el-radio-group v-model="radio3">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="ipt-out">
        <el-radio-group v-model="radio4" size="medium" @change="radbtn">
          <el-radio-button label="1">上海</el-radio-button>
          <el-radio-button label="2">北京</el-radio-button>
          <el-radio-button label="3">广州</el-radio-button>
          <el-radio-button label="4">深圳</el-radio-button>
        </el-radio-group>
      </div>
      <div class="ipt-out">
        <el-radio-group v-model="radio5" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="ipt-out">
        <el-radio-group v-model="radio6" disabled size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="form-ipt">
      <h4 class="title">复选框</h4>
      <div class="ipt-out">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="0">复选框0</el-checkbox>
          <el-checkbox label="1">复选框1</el-checkbox>
          <el-checkbox label="2">复选框2</el-checkbox>
          <el-checkbox label="3">复选框3</el-checkbox>
          <el-checkbox label="4">复选框4</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="ipt-out">
        <el-checkbox-group v-model="checkList1">
          <el-checkbox label="0" border>复选框0</el-checkbox>
          <el-checkbox label="1" border>复选框1</el-checkbox>
          <el-checkbox label="2" border>复选框2</el-checkbox>
          <el-checkbox label="3" border>复选框3</el-checkbox>
          <el-checkbox label="4" border>复选框4</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="ipt-out">
        <el-checkbox-group v-model="checkList2">
          <el-checkbox-button label="0">复选框0</el-checkbox-button>
          <el-checkbox-button label="1">复选框1</el-checkbox-button>
          <el-checkbox-button label="2">复选框2</el-checkbox-button>
          <el-checkbox-button label="3">复选框3</el-checkbox-button>
          <el-checkbox-button label="4">复选框4</el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div class="ipt-out">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data() {
    return {
      radio: "1",
      radio3: "上海",
      radio4: "1",
      radio5: "上海",
      radio6: "上海",
      radio7: "1",
      radio8: "1",
      radio9: "1",
      radio10: "1",
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      checkList: ["0", "3"],
      checkList1: ["0", "3"],
      checkList2: ["0", "3"]
    };
  },
  methods: {
    radioipt() {
      console.log(this.radio9);
    },
    radbtn() {
      console.log(this.radio4);
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
      console.log(this.checkedCities)
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      console.log(this.checkedCities)
    }
  }
};
</script>
<style scoped>
.form-ipt {
  text-align: left;
  margin: 10px;
  border-bottom: 1px dotted #000;
}
.title {
  color: #00a7a7;
  border-left: 5px solid #00a7a7;
  padding-left: 8px;
}
.ipt-out {
  padding: 10px 10px;
  margin: 5px 0;
}
.radio-ipt {
  padding: 10px 0;
}
</style>
