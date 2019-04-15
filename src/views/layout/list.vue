<template>
  <!-- <h1 @click="aa">{{tit}}</h1> -->
  <div>
    <el-table ref="multipleTable" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe tooltip-effect="dark" style="100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="日期" width="220">
        <template slot-scope="scope">{{scope.row.date | dateFormat}}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column label="分级" width="120">
        <el-rate v-model="rate"></el-rate>
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[2, 4, 6, 8]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import tablelist from "@/json/tableList.json";
export default {
  data() {
    return {
      stripe: true,
      currentPage: 1,
      pagesize: 2,
      total: "",
      tableData: [],
      multipleSelection: [],
      rate: 3.5
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("即将删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.tableData.splice(index, 1);
          //删除后总条数减1
          this.total = this.total - 1;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 每页显示的条数
    handleSizeChange(val) {
      // 改变每页显示的条数
      this.pagesize = val;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
    },
    // 显示第几页
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage = val;
    }
  },
  created: function() {
    this.tableData = tablelist.tableData;
    console.log(this.tableData);
    this.total = this.tableData.length;
    console.log(this.total);
  }
};
</script>
<style>
.el-table th {
  text-align: center;
}
.el-table td {
  text-align: center;
}
.el-table .cell.el-tooltip {
  text-align: left;
}
.el-rate__icon {
  font-size: 16px;
  margin: 0;
}
</style>

