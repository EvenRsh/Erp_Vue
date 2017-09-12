<template>
    <div>
      <el-dialog title="采购订单" :visible.sync="dialogFormVisible" size="siny">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="">保存</el-button>
            <el-button @click="dialogFormVisible=false">取消</el-button>
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
              }
            }
        },
        components: {},
        computed: {},
        methods: {
          wh(){
            this.dialogFormVisible = true;
          }
        },
    }
</script>

<style lang="scss">

</style>
