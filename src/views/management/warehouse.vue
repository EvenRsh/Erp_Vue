<template>
  <div class="cangku">
    <el-row class="headerTop" style="margin-top: 10px">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-tabs v-show="tabs" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="1号仓库" name="first">
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
            </el-tab-pane>
            <el-tab-pane label="2号仓库" name="second">
              配置管理
            </el-tab-pane>
          </el-tabs>
          <el-button type="primary" icon="plus" @click="popwhdialog" style="position: absolute;top: -6px;right: 52px;">
            新增
          </el-button>
        </div>
        <warehouse-dialog ref="whdialog"></warehouse-dialog>
      </el-col>
    </el-row>
    <el-row class="">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="">
  import warehouseDialog from './mg_dialog/warehouseDialog'
  export default {
    name: '',
    data() {
      return {
        tabs: true,
        activeName: 'first',
        tabledata: [{
          warehouse_name: '1号仓库',
          warehouse_number: '001',
          area: '广州天河',
          address: 'xxxxx号',
          principal: 'aa',
          patientia: '是',
          action: '35',
        }, {
          warehouse_name: '2号仓库',
          warehouse_number: '002',
          area: '佛山禅城',
          address: 'xxxxx号',
          principal: 'bb',
          patientia: '否',
        }],
      }
    },
    components: {
      warehouseDialog,
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      popwhdialog(){
        this.$refs.whdialog.wh()
      }
    },
    mounted() {

    },
    created() {

    },
  }
</script>

<style lang="scss">
  /*@import 'src/style/index.scss';*/
  .cangku .cell {

  i {
    display: inline-block;
    margin: 0 5%;
    color: #4db3ff;
  }

  }
</style>
