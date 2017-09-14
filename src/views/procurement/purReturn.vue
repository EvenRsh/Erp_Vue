<template>
    <div>
      <pro-top @test="pur_t"></pro-top>
      <return-dialog ref="pur"></return-dialog>
    </div>
</template>

<script>
  import proTop from "./components/proTop"
  import returnDialog from "./dialog/returnDialog"
  export default {
        data(){
            return {}
        },
        components: {
          proTop,
          returnDialog,
        },
        computed: {},
        methods: {
            pur_t(){
              this.$refs.pur.ret()
            }
        },
    }
</script>

<style lang="scss">

</style>
