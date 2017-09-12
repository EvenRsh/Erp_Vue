<template>
  <div class="pur">
    <!--一级弹窗-->
    <el-dialog title="采购订单入库" :visible.sync="dialogFormVisible" size="aa">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple-dark">
            <el-form :model="form">
              <el-form-item label="商品入库编号" :label-width="formLabelWidth">
                <el-input
                  placeholder="商品入库编号"
                  icon="close"
                  v-model="form.name"
                  :on-icon-click="handleIconClick">
                </el-input>
              </el-form-item>
              <el-form-item label="所属仓库" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择仓库">
                  <el-option label="仓库1" value="shanghai"></el-option>
                  <el-option label="仓库2" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品订单" :label-width="formLabelWidth">
                <!--<el-input v-model="form.order" auto-complete="off"></el-input>-->
                <el-input
                  placeholder=""
                  icon="plus"
                  v-model="form.order"
                  :on-icon-click="order_pup">
                </el-input>
              </el-form-item>
              </el-form-item>
              <el-form-item label="入库日期" :label-width="formLabelWidth">
                <div class="block">
                  <el-date-picker
                    v-model="form.time"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions0">
                  </el-date-picker>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-dark">
            <el-form :model="form">
              <el-form-item label="收货人" :label-width="formLabelWidth">
                <el-select v-model="form.person" placeholder="请选择供应商">
                  <el-option label="aa" value="shanghai"></el-option>
                  <el-option label="bb" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="金额" :label-width="formLabelWidth">
                <el-input v-model="form.money" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="供应商" :label-width="formLabelWidth">
                <el-input v-model="form.supplier" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
          </div>

        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="margin-top: 10px">
          <div class="grid-content bg-purple-dark">
            <el-table ref="singleTable" :data="tabledata" border highlight-current-row
                      @cell-mouse-enter='cc'
                      @cell-mouse-leave='dd'
                      @current-change=""
                      style="width: 100%">
              <el-table-column label="商品编号">
                <template scope="scope">
                  <el-checkbox label="" name="type"></el-checkbox>
                  <span style="margin-left: 10px">{{ scope.row.product_id }}</span>
                </template>
              </el-table-column>
              <el-table-column label="商品名称">
                <template scope="scope">
                  <span>{{ scope.row.product_name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="商品分类">
                <template scope="scope">
                  <span>{{ scope.row.product_category }}</span>
                </template>
              </el-table-column>
              <el-table-column label="规格">
                <template scope="scope">
                  <span>{{ scope.row.product_spec }}</span>
                </template>
              </el-table-column>
              <el-table-column label="计量单位">
                <template scope="scope">
                  <span>{{ scope.row.units }}</span>
                </template>
              </el-table-column>
              <el-table-column label="订单量">
                <template scope="scope">
                  <el-input v-show="edit" size="small" v-model="scope.row.amount" style="width: 60px;"></el-input>
                  <span v-show="!edit">{{ scope.row.amount }}</span>
                </template>
              </el-table-column>
              <el-table-column label="入库数量">
                <template scope="scope">
                  <!--<el-input v-show="edit" size="small" v-model="scope.row.original_price" style="width: 60px;"></el-input>-->
                  <span>{{ scope.row.original_price }}</span>
                </template>
              </el-table-column>
              <el-table-column label="金额">
                <template scope="scope">
                  <!--<el-input v-show="edit" size="small" v-model="scope.row.discount" style="width: 60px;"></el-input>-->
                  <span>{{ scope.row.discount }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--二级弹窗-->

  </div>
</template>

<script>
  export default {
    data(){
      return {
        edit: false,
//          弹窗table数据
        tabledata: [{
          product_id: '123',
          product_name: '亚麻',
          product_category: '麻类',
          product_spec: '',
          units: '公斤',
          amount: '1000',
          original_price: '35',
          discount: '1.0',
          discount_price: '35',
          product_sum: '1000'
        }],
        dialogFormVisible: false,
        dialogionc:false,
        tiaoma: '123123',
        form: {
          name: '321321',
          region: '',
          date1: '',
          delivery: false,
          type: [],
          resource: '',
          time: '',
          money: '',
          person: '',
          supplier: '',
          order:'',
        },
        formLabelWidth: '120px',
        aa: '600px',
        pickerOptions0: {
//                  日期
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
      }
    },
    components: {},
    computed: {},
    methods: {
      pur(){
        //可以请求数据
        this.dialogFormVisible = true
      },
//          x图片函数
      handleIconClick(){
        this.form.name = ''
      },
      order_pup(){
      console.log(123)
        this.dialogionc = true
      },
      cc(){
        this.edit = true
      },
      dd(){
        this.edit = false
      },
    },
    created(){
//            this.test()
    }
  }
</script>

<style lang="scss">
  .pur {

  .el-dialog {
    width: 850px;
  }

  .el-dialog__header {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin: 0 20px;
  }

  .el-checkbox__label {
    position: relative;
    left: -27px;
  }

  .fapiao {

  .el-checkbox__label {
    position: relative;
    left: -42px;
  }

  }
  .el-checkbox, .el-checkbox__input {
    left: -6px;
  }

  .el-icon-close {
    left: 157px;
  }

  .el-input {
    width: 190px;
  }

  }


</style>
