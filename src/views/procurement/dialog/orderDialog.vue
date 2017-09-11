<template>
  <div class="dia">
    <el-dialog title="采购订单" :visible.sync="dialogFormVisible" size="aa">
      <el-row>
        <el-col :span="12" style="padding-left: 16px;">
          <div class="grid-content bg-purple-dark">
            <el-form :model="form">
              <el-form-item label="订单编号" :label-width="formLabelWidth">
                <el-input
                  placeholder="订单编号"
                  icon="close"
                  v-model="form.name"
                  :on-icon-click="handleIconClick">
                </el-input>
              </el-form-item>
              <el-form-item label="供应商" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择供应商">
                  <el-option label="供应商1" value="shanghai"></el-option>
                  <el-option label="供应商2" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="采购员" :label-width="formLabelWidth">
                <el-select v-model="form.date1" placeholder="">
                  <el-option label="采购员1" value="caigou1"></el-option>
                  <el-option label="采购员2" value="caigou2"></el-option>
                </el-select>
              </el-form-item>
              </el-form-item>
              <el-form-item label="仓库" :label-width="formLabelWidth">
                <!--<label for="asd" style="position: absolute;left: -110px;">入库<input type="radio" id="asd"></label>-->
                <el-checkbox label="入库" name="type" style="position: absolute;left: -110px;"></el-checkbox>
                <el-select v-model="form.date2" placeholder="">
                  <el-option label="仓库1" value="cangku1"></el-option>
                  <el-option label="仓库2" value="cangku2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="发票号" :label-width="formLabelWidth" class="fapiao">
                <el-checkbox label="预付款" name="type" style="position: absolute;left: -110px;"></el-checkbox>
                <el-input v-model="form.money" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="12" style="padding-left: 135px;">
          <div class="grid-content bg-purple-dark">
            <el-form :model="form">
              <el-form-item label="订货日期" :label-width="formLabelWidth">
                <!--<el-input v-model="form.name" auto-complete="off"></el-input>-->
                <div class="block">
                  <el-date-picker
                    v-model="form.time"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions0">
                  </el-date-picker>
                </div>
              </el-form-item>
              <el-form-item label="计划到货日期" :label-width="formLabelWidth">
                <!--<el-input v-model="form.name" auto-complete="off"></el-input>-->
                <div class="block">
                  <el-date-picker
                    v-model="form.time1"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions0">
                  </el-date-picker>
                </div>
              </el-form-item>
              <el-form-item label="总金额" :label-width="formLabelWidth">
                <el-input v-model="form.money" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="付款账号" :label-width="formLabelWidth"
                            style="    position: absolute;left: 301px;top: 232px;">
                <el-select v-model="form.bank" placeholder="请选择供应商">
                  <el-option label="工商银行" value="gs"></el-option>
                  <el-option label="中国银行" value="zg"></el-option>
                </el-select>
              </el-form-item>
              <!--<el-form-item label="" :label-width="formLabelWidth">-->
              <!--&lt;!&ndash;<el-input v-model="form.money" auto-complete="off"></el-input>&ndash;&gt;-->
              <!--</el-form-item>-->
              <el-form-item label="预付金额" :label-width="formLabelWidth" style="margin-top: 80px;">
                <el-input v-model="form.money" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
          </div>

        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="border-bottom: 1px solid #ccc;padding-bottom: 10px;">
          <div class="grid-content bg-purple">
            <el-button type="primary" icon="plus" style="margin-left: 6px;">搜索</el-button>
            <el-button type="primary">Excel导出</el-button>
            <div style="display: inline-block; float: right; margin-right: 20px;"><span
              style="display: inline-block;margin-right: 10px;">条码输入</span>
              <el-input v-model="tiaoma" auto-complete="off"></el-input>
            </div>
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
              <el-table-column label="数量">
                <template scope="scope">
                  <el-input v-show="edit" size="small" v-model="scope.row.amount" style="width: 60px;"></el-input>
                  <span v-show="!edit">{{ scope.row.amount }}</span>
                  <!--<span>{{ scope.row.amount }}</span>-->
                </template>
              </el-table-column>
              <el-table-column label="原价">
                <template scope="scope">
                  <el-input v-show="edit" size="small" v-model="scope.row.original_price" style="width: 60px;"></el-input>
                  <span v-show="!edit">{{ scope.row.original_price }}</span>
                  <!--<span>{{ scope.row.original_price }}</span>-->
                </template>
              </el-table-column>
              <el-table-column label="折扣">
                <template scope="scope">
                  <el-input v-show="edit" size="small" v-model="scope.row.discount" style="width: 60px;"></el-input>
                  <span v-show="!edit">{{ scope.row.discount }}</span>
                  <!--<span>{{ scope.row.discount }}</span>-->
                </template>
              </el-table-column>
              <el-table-column label="折后金额">
                <template scope="scope">
                  <el-input v-show="edit" size="small" v-model="scope.row.discount_price" style="width: 60px;"></el-input>
                  <span v-show="!edit">{{ scope.row.discount_price }}</span>
                  <!--<span>{{ scope.row.discount_price }}</span>-->
                </template>
              </el-table-column>
              <el-table-column label="金额">
                <template scope="scope">
                  <span>{{ scope.row.product_sum }}</span>
                </template>
              </el-table-column>


            </el-table>
          </div>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        edit:false,
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
        tiaoma: '123123',
        form: {
          name: '321321',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          time: '',
          time1: '',
          money: '',
          bank: '',

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
      dialogForm(){
        //可以请求数据
        this.dialogFormVisible = true
      },
//          x图片函数
      handleIconClick(){
        this.form.name = ''
      },
      cc(){
        this.edit=true
      },
      dd(){
        this.edit=false
      }

    },
    created(){
//            this.test()
    }
  }
</script>

<style lang="scss">
  .dia {

  .el-dialog {
    width: 970px;
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
    left: 30px;
  }

  .el-icon-close {
    left: 157px;
  }

  .el-input {
    width: 190px;
  }

  }


</style>
