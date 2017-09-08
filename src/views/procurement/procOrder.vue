<template>
  <div>
    <div class="top">
      <el-row class="fist_top">
        <el-col :span="20">
          <div class="grid-content bg-purple-dark">
            {{$route.name}}
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-dark" style="line-height: 50px">
            <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple-dark">
            <el-form :model="form">
              <el-form-item label="入库日期" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="最近一个月">
                  <el-option label="最近一个月" value="frist"></el-option>
                  <el-option label="最近两个月" value="second"></el-option>
                  <el-option label="最近三个月" value="three"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="21">
          <div class="grid-content bg-purple-dark">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <span>至</span>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <p style="display: inline-block ;margin-left: 40px">供应商</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="input" placeholder="请输入内容" class="big_width"></el-input>
            <el-button type="primary" @click="dialogFormVisible = true">查询</el-button>
          </div>
        </el-col>
        <!--<el-col :span="4">-->
          <!--<div class="grid-content bg-purple-dark">-->
            <!--&lt;!&ndash;<el-button type="primary" @click="dialogFormVisible = true">新增</el-button>&ndash;&gt;-->
          <!--</div>-->
        <!--</el-col>-->
      </el-row>
    </div>
    <order-dialog></order-dialog>
    <div>
      table数据
    </div>
  </div>
  </div>
</template>

<script lang="">
  import orderDialog from './dialog/orderDialog'
  export default {
    name: '',
    data() {
      return {
        dialogFormVisible: false,
        options: [{
          value: '选项1',
          label: '供应商1'
        }, {
          value: '选项2',
          label: '供应商2'
        }, {
          value: '选项3',
          label: '供应商3'
        }],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '',
        value: '',
        input:''
      }
    },
    components: {
      orderDialog,
    },
    methods: {},
    mounted() {

    },
    created() {

    },
  }
</script>

<style lang="scss">
  p {
    margin: 0;
    padding: 0;
  }

  .top {
    height: 103px;
    border-radius: 2px;
    border: 1px solid #cccccc;

  .fist_top {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    margin: 0 12px;
  }

  }
  .el-form-item__label{
    padding:0 12px 0 0;
    line-height: 53px;
  }
  .el-input{
    line-height: 53px;
  }
  .el-form-item{
    margin:0 0 0 10px;
  }
  .el-input, .el-input__inner{
    width: 120px;
  }
  .big_width {
    width:300px;
    .el-input__inner{
      width: 300px !important;
    }
  }

</style>
