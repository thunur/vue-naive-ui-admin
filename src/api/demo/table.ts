import { DemoParams } from '/#/model/demo/tableModel';
import { BaseService, Service } from '/@/service/common';

@Service('demo')
class Demo extends BaseService {
  demoListApi(params: DemoParams) {
    return this.request({
      url: '/table/getDemoList',
      params,
    });
  }
}

export default Demo;
