/*
 * @Author: Thunur
 * @Date: 2022-01-28 10:49:17
 * @LastEditors: Thunur
 * @LastEditTime: 2022-01-28 10:55:57
 * @FilePath: /vue3-antd-admin/plop-tpls/views/prompt.js
 */
const path = require('path');
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
  description: '创建页面',
  prompts: [
    {
      type: 'list',
      name: 'path',
      message: '请选择页面创建目录',
      choices: getFolder('src/views'),
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入文件名',
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
    let relativePath = path.relative('src/views', data.path);
    const actions = [
      {
        type: 'add',
        path: `${data.path}/{{dotCase name}}.vue`,
        templateFile: 'plop-templates/views/index.hbs',
        data: {
          componentName: `${relativePath} ${data.name}`,
        },
      },
    ];
    return actions;
  },
};
