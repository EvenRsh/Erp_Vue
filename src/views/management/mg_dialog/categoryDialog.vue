<template>
  <div class="cate_dia">
    <el-dialog title="添加商品" :visible.sync="dialogFormVisible" size="siny">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="分类名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="上级分类">
          <el-select v-model="value7" placeholder="顶级分类">
            <el-option-group
              v-for="group in options3"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="btn">
            <el-button type="primary" @click="">保 存</el-button>
            <el-button @click="dialogFormVisible=false">取 消</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        labelPosition: 'right',
        dialogFormVisible:false,
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: ''
      }
    },
    components: {},
    computed: {},
    methods: {
      category(){
        this.dialogFormVisible = true;
      }
    },
  }
</script>

<style lang="scss">
  .cate_dia{
    .el-dialog {
      width: 400px;
      .el-input{
        width:230px;
      }
    }
  .btn{
    text-align: center;
    margin-left: -80px;
  }
  }

</style>
