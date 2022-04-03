/*
 * @Author: Thunur
 * @Date: 2022-01-28 10:49:17
 * @LastEditors: Thunur
 * @LastEditTime: 2022-01-28 10:55:54
 * @FilePath: /vue3-antd-admin/plop-tpls/store/prompt.js
 */
module.exports = {
  description: '创建全局状态管理',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入模块名称',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '模块名称不能为空';
        } else {
          return true;
        }
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: 'src/store/modules/{{camelCase name}}.ts',
        templateFile: 'plop-templates/store/index.hbs',
      },
    ];
    return actions;
  },
};
