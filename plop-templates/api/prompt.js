/*
 * @Author: Thunur
 * @Date: 2022-01-28 10:49:17
 * @LastEditors: Thunur
 * @LastEditTime: 2022-02-19 01:15:20
 * @FilePath: /vue3-antd-admin/plop-templates/api/prompt.js
 */
const fs = require('fs');

function getFolder(path) {
  let components = [];
  const files = fs.readdirSync(path);
  files.forEach(function (item) {
    let stat = fs.lstatSync(path + '/' + item);
    if (stat.isDirectory() === true && item != 'components') {
      components.push(path + '/' + item);
      components.push.apply(components, getFolder(path + '/' + item));
    }
  });
  return components;
}

module.exports = {
  description: '创建接口',
  prompts: [
    {
      type: 'input',
      name: 'address',
      message: '接口请求地址（例如sys/login)',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '接口地址不能为空';
        } else {
          return true;
        }
      },
    },
    {
      type: 'list',
      name: 'path',
      message: '请选择组件创建目录',
      choices: getFolder('src/api'),
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入文件名（不需要带扩展名）',
      validate: (v) => {
        if (!v || v.trim === '') {
          return '文件名不能为空';
        } else {
          return true;
        }
      },
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: `${data.path}/{{dotCase name}}.ts`,
        templateFile: 'plop-templates/api/index.hbs',
      },
    ];
    return actions;
  },
};
