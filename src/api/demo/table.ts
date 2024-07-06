import { DemoParams } from '#/model/demo/tableModel';
import { BaseService, Service } from '@/service/common';

@Service('demo')
class Demo extends BaseService {
  demoListApi(params: DemoParams) {
    console.log(params);
    return this.request({
      url: '/table/getDemoList',
      method: 'GET',
      params,
    });
  }
}

export default Demo;
