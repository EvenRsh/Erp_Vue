<template>
  <div class="cangku">
    <el-row class="headerTop" style="margin-top: 10px">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-tabs v-show="tabs" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="1号仓库" name="first" >
              <tab-table ref="tab_data"></tab-table>
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
  import tabTable from './components/tabTable'
  import {warehouse} from 'api/http'
  export default {
    name: '',
    data() {
      return {
        tabs: true,
        activeName: 'first',
        tabledata: [{
//          warehouse_name: '1号仓库',
//          warehouse_number: '001',
//          area: '广州天河',
//          address: 'xxxxx号',
//          principal: 'aa',
//          patientia: '是',
//          action: '35',
//        }, {
//          warehouse_name: '2号仓库',
//          warehouse_number: '002',
//          area: '佛山禅城',
//          address: 'xxxxx号',
//          principal: 'bb',
//          patientia: '否',
        }],
      }
    },
    components: {
      warehouseDialog,
      tabTable,
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        this.$refs.tab_data.table_data()
      },
      popwhdialog(){
        this.$refs.whdialog.wh()
      },
//      table_data (){
//        warehouse().then(res => {
//          console.log(res.data)
//          this.tabledata = res.data
//        })
//      }
    },
    mounted() {

    },
    created() {
//      this.table_data()
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
