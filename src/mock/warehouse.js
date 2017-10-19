import Mock from 'mockjs';

const warehouse = [];
const count = 2;

for (let i = 0; i < count; i++) {
warehouse.push(Mock.mock({
  // id: '@id',
  // title: '@ctitle(10, 20)',
  // 'status|1': ['published', 'draft'],
  // author: '@cname',
  // display_time: '@datetime',
  // pageviews: '@integer(300, 5000)'
  warehouse_name: '1号仓库',
  warehouse_number: '001',
  area: '广州天河',
  address: 'xxxxx号',
  principal: 'aa',
  patientia: '是',
  action: '35',
}));
}
export default{
  warehouse: () => warehouse,
}
//

