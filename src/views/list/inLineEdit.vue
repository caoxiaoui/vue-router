<template>
  <div class="InlineEditTable">
    <el-table ref="multipleTable" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe tooltip-effect="dark" style="100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="ID" width="40">
        <template slot-scope="scope">{{scope.row.id}}</template>
      </el-table-column>
      <el-table-column prop="date" label="日期" width="220">
        <template slot-scope="scope">{{scope.row.date | dateFormat}}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip align="left">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input v-model="scope.row.address" class="edit-input" size="mini" />
            <el-button class="cancel-btn" size="mini" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">cancel</el-button>
          </template>
          <span v-else>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit" type="success" size="mini" icon="el-icon-circle-check-outline" @click="confirmEdit(scope.row)">Ok</el-button>
          <el-button v-else type="primary" size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[8, 10, 16, 20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import tablelist from "@/json/tableList.json";

export default {
  name: "InlineEditTable",
  data() {
    return {
      stripe: true,
      currentPage: 1,
      pagesize: 8,
      total: "",
      tableData: [],
      multipleSelection: []
    };
  },
  created() {
    this.tableData = tablelist.tableData;
    console.log(this.tableData);
    this.total = this.tableData.length;
    console.log(this.total);
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
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
    },
    handleEdit(index, row) {
      console.log(index, row);
      row.edit=!row.edit
      row.originalTitle = row.address;
    },
    cancelEdit(row) {
      console.log(row);
      row.address = row.originalTitle;
      row.edit = false;
      this.$message({
        // message: "The address has been restored to the original value",
        message: "地址已恢复为原始值",
        type: "warning"
      });
    },
    confirmEdit(row) {
      console.log(row);
      row.edit = false;
      row.originalTitle = row.address;
      this.$message({
        // message: "The address has been edited",
        message: "地址已被编辑",
        type: "success"
      });
    }
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
.el-table .is-left .cell.el-tooltip {
  text-align: left;
}
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
