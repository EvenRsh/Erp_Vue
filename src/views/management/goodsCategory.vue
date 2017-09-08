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
    <el-row class="" style="margin-top: 10px">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="">
  export default {
    name: '',
    data() {
      return {}
    },
    components: {},
    methods: {

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

