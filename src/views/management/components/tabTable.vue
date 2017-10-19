<template>
  <el-table ref="singleTable" :data="tabledata" border highlight-current-row
            @current-change=""
            style="width: 100%">
    <el-table-column label="仓库名称">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.warehouse_name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="编号">
      <template scope="scope">
        <span>{{ scope.row.warehouse_number }}</span>
      </template>
    </el-table-column>
    <el-table-column label="区域">
      <template scope="scope">
        <span>{{ scope.row.area }}</span>
      </template>
    </el-table-column>
    <el-table-column label="地址">
      <template scope="scope">
        <span>{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column label="负责人">
      <template scope="scope">
        <span>{{ scope.row.principal }}</span>
      </template>
    </el-table-column>
    <el-table-column label="默认">
      <template scope="scope">
        <span>{{ scope.row.patientia }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <i class="el-icon-edit"></i>
        <i class="el-icon-delete"></i>
        <i class="el-icon-search"></i>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
  import {warehouse} from 'api/http'
  export default {
    data(){
      return {
        tabledata: [{}]
      }
    },
    components: {},
    computed: {},
    methods: {
//      那数据
      table_data (){
        warehouse().then(res => {
//          console.log(res.data)
          this.tabledata = res.data
        })
      }
    },
    mounted() {

    },
    created() {
      this.table_data()
    },
  }
</script>

<style lang="scss">

</style>
