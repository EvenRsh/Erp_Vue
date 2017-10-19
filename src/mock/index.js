
import Mock from 'mockjs';
import dataListAPI from './datalist';
import goodsinfo_table from './goodsinfo_table';
import warehouse from './warehouse';
Mock.mock('http://localhost:8024/article/list', 'get',dataListAPI.getList);
Mock.mock('http://localhost:8024/goodsinfo_table', 'get',goodsinfo_table.goodsinfo_table);
Mock.mock('http://localhost:8024/warehouse', 'get',warehouse.warehouse);

