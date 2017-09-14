<template>
  <div >
    <el-row class="header_top">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <navbar></navbar>
        </div>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script lang="">
  import Navbar from "./Navbar"
  export default {
    name: '',
    data() {
      return {}
    },
    components: {
      Navbar
    },
    methods: {

    },
    mounted() {

    },
    created() {

    },
  }
</script>

<style lang="">
  .header_top {

  }
</style>
