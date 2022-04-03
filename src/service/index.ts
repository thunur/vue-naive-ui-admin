import { BaseService } from './common';
import { baseName } from '/@/utils';
import { useServiceStoreWithOut } from '/@/store/modules/service';

function deepFiles(list: any[]) {
  const modules: any = {};

  list.forEach((e) => {
    const arr: any[] = e.path.split('/');
    const parents: any[] = arr.slice(0, arr.length - 1);
    const name: string = baseName(e.path).replace('.ts', '');

    let curr: any = modules;
    let prev: any = null;
    let key: any = null;

    parents.forEach((k) => {
      if (!curr[k]) {
        curr[k] = {};
      }

      prev = curr;
      curr = curr[k];
      key = k;
    });

    if (name == 'index') {
      prev[key] = e.value;
    } else {
      curr[name] = e.value;
    }
  });

  return modules;
}

function setupService() {
  // 扫描文件
  const files = import.meta.globEager('/src/api/**/*.ts');
  const array: any = [];
  for (const i in files) {
    const value = files[i].default;
    array.push({
      path: i.replace('/src/api/', ''),
      value: new value(),
    });
  }

  const s = deepFiles(array);
  s.request = new BaseService().request;
  // 将各个请求方法保存到vuex
  useServiceStoreWithOut().setService(s);
  return s;
}

export { BaseService, deepFiles, setupService };
