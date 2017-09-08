<template>
    <div>
      <el-row class="headerTop" style="margin-top: 10px">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <span
              style="display: inline-block;margin-left: 20px;">{{$route.name}}</span>
          </div>
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
    export default {
        name: '',
        data() {
            return {}
        },
        components: {},
        methods: {},
        mounted() {

        },
        created() {

        },
    }
</script>

<style lang="scss">
  @import 'src/style/index.scss';
</style>
