<template>
  <div>
    <el-row class="headerTop">
      <el-col :span="20">
        <div class="grid-content bg-purple-dark"><span
          style="display: inline-block;margin-left: 20px;">{{$route.name}}</span></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark">
          <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
      </el-col>
      <el-col :span="22" style="padding-left: 10px">
        <div class="grid-content bg-purple-light">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="product_id"
              label="商品编号"
              width="">
            </el-table-column>
            <el-table-column
              prop="product_name"
              label="商品名称"
              width="">
            </el-table-column>
            <el-table-column
              prop="the_category"
              label="所属分类"
              width="">
            </el-table-column>
            <el-table-column
              prop="unit"
              label="计量单位">
            </el-table-column>
            <el-table-column
              prop="spec"
              label="规格">
            </el-table-column>
            <el-table-column
              prop="brand"
              label="品牌">
            </el-table-column>
            <el-table-column
              prop="pur_price"
              label="采购价">
            </el-table-column>
            <el-table-column
              prop="sale_price"
              label="销售价">
            </el-table-column>
            <el-table-column
              prop="barcode"
              label="条码">
            </el-table-column>
            <el-table-column
              prop="Stock_number"
              label="库存数量">
            </el-table-column>
            <el-table-column
              prop="provider"
              label="供应商">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <!--1级弹窗-->
    <el-dialog :title="$route.name" :visible.sync="dialogFormVisible" size="large"
    >
      <el-row>
        <el-col :span="12" style="padding-right: 3px">
          <div class="grid-content bg-purple">
            <el-form :model="form">
              <el-form-item label="商品编号" :label-width="formLabelWidth">
                <el-input
                  placeholder=""
                  icon="close"
                  v-model="input2"
                  :on-icon-click="handleIconClick">
                </el-input>
              </el-form-item>
            </el-form>
            <el-form :model="form">
              <el-form-item label="商品名称" :label-width="formLabelWidth">
                <el-input v-model="input2" placeholder=""></el-input>
              </el-form-item>
            </el-form>
            <el-form :model="form">
              <el-form-item label="商品分类" :label-width="formLabelWidth">
                <el-input
                  placeholder=""
                  icon="plus"
                  v-model="input2"
                  :on-icon-click="handleIconClick">
                </el-input>
              </el-form-item>
            </el-form>
            <el-form :model="form">
              <el-form-item label="计算单位" :label-width="formLabelWidth">
                <el-select v-model="value" placeholder="选择单位">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <el-form :model="form">
              <el-form-item label="采购单价" :label-width="formLabelWidth">
                <el-input v-model="input2" placeholder=""></el-input>
              </el-form-item>
            </el-form>
            <!--<p>商品名称</p>-->
            <!--<el-input v-model="input2" placeholder=""></el-input>-->
            <!--<p>商品分类</p>-->
            <!--<el-input-->
              <!--placeholder=""-->
              <!--icon="plus"-->
              <!--v-model="input2"-->
              <!--:on-icon-click="handleIconClick">-->
            <!--</el-input>-->
            <!--<p>计算单位</p>-->
            <!--<el-select v-model="value" placeholder="选择单位">-->
              <!--<el-option-->
                <!--v-for="item in options"-->
                <!--:key="item.value"-->
                <!--:label="item.label"-->
                <!--:value="item.value">-->
              <!--</el-option>-->
            <!--</el-select>-->
            <!--<p>采购单价</p>-->
            <!--<el-input v-model="input2" placeholder=""></el-input>-->
          </div>
        </el-col>
        <el-col :span="12" style="padding-left: 3px">
          <div class="grid-content bg-purple">
            <el-form :model="form">
              <el-form-item label="条码" :label-width="formLabelWidth">
                <el-input v-model="input2" placeholder=""></el-input>
              </el-form-item>
            </el-form>
            <el-form :model="form">
              <el-form-item label="规格" :label-width="formLabelWidth">
                <el-input v-model="input2" placeholder=""></el-input>
              </el-form-item>
            </el-form>
            <el-form :model="form">
              <el-form-item label="品牌" :label-width="formLabelWidth">
                <el-input v-model="input2" placeholder=""></el-input>
              </el-form-item>
            </el-form>
            <el-form :model="form">
              <el-form-item label="供应商" :label-width="formLabelWidth">
                <el-input
                  placeholder=""
                  icon="plus"
                  v-model="input2"
                  :on-icon-click="handleIconClick">
                </el-input>
              </el-form-item>
            </el-form>
            <el-form :model="form">
              <el-form-item label="销售单价" :label-width="formLabelWidth">
                <el-input v-model="input2" placeholder=""></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!--2级弹窗-->
    <el-dialog title="商品分类" :visible.sync="secondary_popup" size="tiny">
      <el-collapse v-model="activeNames" @change="" accordion>
        <el-collapse-item title="棉类" name="1">
          <p>全棉</p>
          <p>高品质棉</p>
          <p>丝光棉</p>
          <p>竹节棉</p>
        </el-collapse-item>
        <el-collapse-item title="麻类" name="2">
          <p>亚麻</p>
          <p>苎麻</p>
        </el-collapse-item>
      </el-collapse>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="secondary_popup = false">保 存</el-button>
        <el-button @click="secondary_popup = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="">
  export default {
    name: '',
    data() {
      return {
//          树的数据
        data: [{
          label: '棉类',
          children: [{
            label: '全棉'
          }, {
            label: '高品质棉'
          }, {
            label: '丝光棉',
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
          }, {
            label: '二级 2-2',
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
//        表格数据
        tableData: [{
          product_id: '121211',
          product_name: '麻棉混纺小暗格',
          the_category: '广州XXX纺织品生产公司',
          unit: '公斤',
          spec: '规格',
          brand: '品牌',
          pur_price: '采购价',
          sale_price: '销售价',
          barcode: '条码',
          Stock_number: '库存数量',
          provider: '供应商',
        }],

        options: [{
          value: '选项1',
          label: '公斤'
        }, {
          value: '选项2',
          label: '米'
        }],
        form: {
          name: '',
          unit: '',
          sort: ''
        },
        formLabelWidth: '120px',
        dialogFormVisible: false,
        secondary_popup: false,
        input2: "",
        value:"",
        activeNames:''
      }
    },
    components: {},
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
//      二级弹窗
      handleIconClick(){
        this.secondary_popup = true
      }
    },
    mounted() {

    },
    created() {

    },
  }
</script>

<style lang="scss">
  @import 'src/style/index.scss';
</style>

