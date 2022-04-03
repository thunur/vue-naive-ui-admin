module.exports = function (plop) {
  plop.setWelcomeMessage('请选择要生成的类型');
  plop.setGenerator('views', require('./plop-templates/views/prompt'));
  plop.setGenerator('component', require('./plop-templates/component/prompt'));
  plop.setGenerator('store', require('./plop-templates/store/prompt'));
  plop.setGenerator('api', require('./plop-templates/api/prompt'));
};
