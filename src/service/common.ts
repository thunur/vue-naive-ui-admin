import { defHttp } from '/@/utils/http/axios';
import { AxiosRequestConfig } from 'axios';
import { RequestOptions } from '/#/axios';
import { Service } from './annotations';

class BaseService {
  [x: string]: any;
  constructor(options: any = {}) {
    const methods: any = {
      page: 'page',
      list: 'list',
      info: 'info',
      add: 'add',
      delete: 'delete',
      update: 'update',
    };

    if (options?.namespace) {
      console.log(options);
      this.namespace = options?.namespace;
    }

    if (!this.permission) this.permission = {};

    for (const i in methods) {
      if (this.namespace) {
        this.permission[i] = this.namespace.replace(/\//g, ':') + ':' + methods[i];
      } else {
        this.permission[i] = methods[i];
      }
    }
  }

  request(config: AxiosRequestConfig, options?: RequestOptions) {
    // 拼接完整路径
    if (this.namespace) {
      config.url = '/' + this.namespace + config.url;
    }
    return defHttp.request(config, options);
  }

  list(data: any) {
    return this.request({
      url: '/list',
      method: 'POST',
      data,
    });
  }

  page(data: any) {
    return this.request({
      url: '/page',
      method: 'POST',
      data,
    });
  }

  info(params: any) {
    return this.request({
      url: '/info',
      method: 'GET',
      params,
    });
  }

  update(data: any) {
    return this.request({
      url: '/update',
      method: 'POST',
      data,
    });
  }

  delete(data: any) {
    return this.request({
      url: '/delete',
      method: 'POST',
      data,
    });
  }

  add(data: any) {
    return this.request({
      url: '/add',
      method: 'POST',
      data,
    });
  }
}

export { BaseService, Service };
