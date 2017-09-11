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
            <el-button type="primary"  icon="plus" @click="bar">新增</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
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
        <el-col :span="19">
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
    <!--弹窗-->
    <order-dialog ref="pop"></order-dialog>

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
    methods: {
//        触发弹窗弹出
        bar(){
            console.log(this.$refs.pop)
          this.$refs.pop.dialogForm()
        }
    },
    mounted() {

    },
    created() {
    },
  }
</script>

<style lang="scss" >
  @import "../../style/index.scss";
</style>
