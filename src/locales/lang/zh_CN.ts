import { genMessage } from '../helper';

const modules = import.meta.glob('./zh_CN/**/*.ts', { eager: true });
export default {
  message: {
    ...genMessage(modules, 'zh_CN'),
  },
};
