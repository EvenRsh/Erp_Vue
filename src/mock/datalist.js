/**
 * Created by XTJ on 2017/10/16.
 */
import Mock from 'mockjs';

const List = [];
const count = 20;

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@id',
    title: '@ctitle(10, 20)',
    'status|1': ['published', 'draft'],
    author: '@cname',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }));
}
export default{
  getList: () => List,
}
//

