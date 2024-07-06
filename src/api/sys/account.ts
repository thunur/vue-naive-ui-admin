import { BaseService, Service } from '@/service/common';
import { LoginParams } from '#/model/account/userModel';
import { ErrorMessageMode } from '#/axios';

@Service('sys/account')
class account extends BaseService {
  // 默认继承了page、add、list、info、delete、update请求，如其他请求可在此自行编写
  // 使用
  // import { useService } from '@/hooks/service';
  // const service = useService();
  // service.文件路径+文件名.请求的方法().then()
  // 例如/api/common文件夹只需要service.common.page().then()
  login(params: LoginParams, mode: ErrorMessageMode = 'modal') {
    return this.request(
      {
        url: '/login',
        method: 'POST',
        params,
      },
      {
        errorMessageMode: mode,
      }
    );
  }
  accountInfoApi() {
    return this.request({ url: '/getAccountInfo' });
  }
  getUserInfo() {
    return this.request({
      url: '/getUserInfo/info',
    });
  }
  doLogout() {
    return this.request({
      url: '/logout',
    });
  }
  getMenuList() {
    return this.request({
      url: '/getMenuList',
    });
  }
  getPermCode() {
    return this.request({
      url: '/getPermCode',
    });
  }
}

export default account;
