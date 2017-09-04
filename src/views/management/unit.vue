<template>
    <div>
      <el-row class="headerTop">
        <el-col  :span="20">
          <div class="grid-content bg-purple-dark"><span style="display: inline-block;margin-left: 20px;">{{$route.name}}</span></div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-dark"><el-button @click="dialogFormVisible = true">新增</el-button></div>
        </el-col>
        <!--弹窗-->
        <el-dialog  title="计量单位" :visible.sync="dialogFormVisible" size="tiny"
        >
          <el-form :model="form">
            <el-form-item label="单位名称" :label-width="formLabelWidth">
              <el-input v-model="form.unit" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="排序" :label-width="formLabelWidth">
              <el-input v-model="form.sort" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-row>
      <el-row class="" style="margin-top: 10px;">
        <el-col  :span="24">
          <div class="grid-content bg-purple-dark">
            <el-table
              :data="tableData"
              border
              style="width: 100%;">
              <el-table-column
                label="单位名称"
                width="">
                <template scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.unit }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="排序"
                width="">
                <template scope="scope">
                      <span>{{ scope.row.sort }}</span>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>

      </el-row>
    </div>
</template>

<script lang="">
    export default {
      data() {
        return {
          tableData: [{
            unit: '公斤',
            sort: '1',
          }, {
            unit: '米',
            sort: '2',
          }],
          temp:{
            unit: '',
            sort: '',
          },
          dialogFormVisible:false,
          currentRow: {},
          form: {
            name: '',
            unit:'',
            sort:''
          },
          formLabelWidth: '120px'
        }
      },
      methods: {
//          编辑
        handleCurrentChange(val) {
          console.log(this.currentRow);
          this.currentRow = val;
          this.temp.unit = this.currentRow.unit;
          this.temp.sort = this.currentRow.sort;
          this.dialogFormVisible = true;
        },
        handleEdit(index, row) {
          console.log(index, row);
          console.log(this.tableData[index])
          this.form = this.tableData[index]
          this.dialogFormVisible = true
        },
//        删除
        handleDelete(index, row) {
//          console.log(index, row);
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.tableData.splice(index, 1)
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      }
    }
</script>

<style lang="">
  .headerTop{
    height: 40px;
    line-height:40px;
    border: 1px #ccc solid;
    border-radius: 5px;
  }
  .el-dialog{
    width: 500px;
  }
  .el-dialog__footer {
    padding: 10px 20px 15px;
    text-align: center;
  }
</style>
