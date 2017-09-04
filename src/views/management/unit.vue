<template>
    <div>
      <el-row class="headerTop">
        <el-col  :span="20">
          <div class="grid-content bg-purple-dark">{{$route.name}}</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-dark"><el-button>默认按钮</el-button></div>
        </el-col>
      </el-row>
      <el-row class="headerTop">
        <el-col  :span="24">
          <div class="grid-content bg-purple-dark">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                label="日期"
                width="180">
                <template scope="scope">
                  <el-icon name="time"></el-icon>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="姓名"
                width="180">
                <template scope="scope">
                      <span>{{ scope.row.name }}</span>
                    <!--</div>-->
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
                    @click="handleDelete(scope.$index, tableData)">删除</el-button>
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
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
            row.splice(index, 1);
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
</style>
