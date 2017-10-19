/**
 * Created by XTJ on 2017/10/17.
 */
import fetch from 'utils/fetch';

//请求数据


// 可以传参
export function getList(canshu) {
  return fetch({
    url: '/article/list',
    method: 'get',
    // params:canshu
  });
}

// 商品信息表格
export function goodsinfo() {
  return fetch({
    url: '/goodsinfo_table',
    method: 'get'
  });
}

export function warehouse() {
  return fetch({
    url: '/warehouse',
    method: 'get'
  });
}

