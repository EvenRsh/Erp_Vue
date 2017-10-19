/**
 * Created by XTJ on 2017/10/18.
 */
import Mock from 'mockjs';

const goodsinfo_table = [];
const count = 5;

for (let i = 0; i < count; i++) {
  goodsinfo_table.push(Mock.mock({
    // id: '@id',
    // title: '@ctitle(10, 20)',
    // 'status|1': ['published', 'draft'],
    // author: '@cname',
    // display_time: '@datetime',
    // pageviews: '@integer(300, 5000)'
    product_id: '123456',
    product_name: '麻棉混纺小暗格',
    the_category: '广州XXX纺织品生产公司',
    unit: '公斤',
    spec: '规格',
    brand: '品牌',
    pur_price: '采购价',
    sale_price: '销售价',
    barcode: '条码',
    Stock_number: '库存数量',
    provider: '供应商',
  }));
}
export default{
  goodsinfo_table: () => goodsinfo_table,
}
