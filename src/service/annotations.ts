import { isObject } from '@/utils/is';

/**
 * 菜单请求的权限
 * @date 2022-03-08
 * @param {any} value:string
 * @returns {any}
 */
export function Permission(value: string) {
  return function (target: any, key: any, descriptor: any) {
    if (!target.permission) {
      target.permission = {};
    }

    setTimeout(() => {
      target.permission[key] = ((target.namespace ? target.namespace + '/' : '') + value).replace(
        /\//g,
        ':'
      );
    }, 0);
    return descriptor;
  };
}

export function Service(value: any) {
  return function (target: any) {
    // 命名
    if (typeof value == 'string') {
      target.prototype.namespace = value;
    }

    // 复杂项
    if (isObject(value)) {
      const { proxy, namespace, url } = value;
      console.log(value);
      const item = __PROXY_LIST__[proxy];

      if (proxy && !item) {
        console.error(`${proxy} 指向的地址不存在！`);
      }

      target.prototype.namespace = namespace;

      if (proxy) {
        target.prototype.proxy = proxy;
        target.prototype.url = url || item ? item.target : null;
      }
    }
  };
}
