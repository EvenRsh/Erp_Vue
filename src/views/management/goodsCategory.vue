<template>
  <div>
    <el-row class="headerTop">
      <el-col :span="20">
        <div class="grid-content bg-purple-dark"><span
          style="display: inline-block;margin-left: 20px;">{{$route.name}}</span></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark">
          <el-button type="primary" @click="goods_cate">新增</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="goods_cate">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"  style="margin-top: 20px">
          <el-table
            :data="tableData5"
            style="width: 100%;">
            <el-table-column type="expand">
              <template scope="scope">
                <!--二级分类-->
                <el-table
                  class="subTable"
                  :show-header="1>2"
                  :data="scope.row.sub_data"
                  style="width: 100%"
                  :default-sort = "{prop: 'date', order: 'descending'}"
                >
                  <el-table-column  type="expand" sortable  >
                  </el-table-column>
                  <el-table-column  prop="name" label="分类名称" >
                    <template scope="scope">
                      <span>{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column  prop="id" label="排序">
                    <template scope="scope">
                      <span> {{ scope.row.sub_id + '-'+ (1+scope.$index) }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="caozuo" label="操作">
                    <template scope="scope">
                      <i class="el-icon-edit"></i>
                      <i class="el-icon-delete"></i>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column label="分类名称" prop="id">
              <template scope="scope">
                <el-icon name="name"></el-icon>
                <span >{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column label="排序" prop="id">
              <template scope="scope">
                <span >{{ scope.$index+1 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" prop="desc">
              <template scope="scope">
                <!--<span >{{ scope.row.shop }}</span>-->
              <i class="el-icon-edit"></i>
              <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <category-dialog ref="categ"></category-dialog>
  </div>
</template>

<script lang="">
  import categoryDialog from './mg_dialog/categoryDialog'
  export default {
    name: '',
    data() {
      return {
        tableData5: [{
          id: '1',
          name: '棉类',
          shop: '王小虎夫妻店',
          shopId: '10333',
          sub_data:[{
            sub_id:'1',
            name:'全棉',
          },{
            sub_id:'1',
            name:'高品质棉',
          },{
            sub_id:'1',
            name:'竹节棉',
          }]
        }, {
          id: '2',
          name: '麻类',
          shop: '王小虎夫妻店',
          shopId: '10333',
          sub_data:[{
            sub_id:'2',
            name:'全棉1',
          }]
        }],
        sub_data:[{
            id:'1',
            name:'全棉',
        }]
      }
    },
    components: {
      categoryDialog,
    },
    methods: {
      goods_cate(){
          this.$refs.categ.category()
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
 .el-table__expanded-cell{
   padding: 0;
 }
  .subTable{
    .el-icon-arrow-right,.el-table__expanded-cell{
      display: none;
    }
  }
  .goods_cate .el-icon-edit,.goods_cate .el-icon-delete{
    display: inline-block;
    margin: 0 3%;
    color:#1d90e6;
  }
</style>

