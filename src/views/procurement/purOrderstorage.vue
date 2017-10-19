<template>
  <div>
    <div class="top">
      <el-row class="fist_top">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            {{$route.name}}
            <el-button type="primary" icon="plus" @click="purcmain"
                       style="float: right;margin-right: 10px;margin-top: 7px;">新增
            </el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <span style="display: inline-block;margin-left: 10px;">入库日期</span>
            <el-select v-model="month" placeholder="最近一个月">
              <el-option label="最近一个月" value="frist"></el-option>
              <el-option label="最近两个月" value="second"></el-option>
              <el-option label="最近三个月" value="three"></el-option>
            </el-select>
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
      </el-row>
    </div>
    <div>
      table数据
    </div>
    <pur-dialog ref="purdialog"></pur-dialog>
  </div>
</template>

<script>
  import purDialog from './dialog/purDialog'
  export default {
    data(){
      return {
        dialogFormVisible: false,
        month: '',
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
        input: '',
        value: ''
      }
    },
    components: {
      purDialog,
    },
    computed: {},
    methods: {
      purcmain(){
        this.$refs.purdialog.pur()
      }
    },
  }
</script>

<style lang="scss">
  @import "../../style/index.scss";
</style>
