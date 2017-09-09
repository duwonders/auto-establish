#! /usr/bin/env node
var path = process.cwd(),
    argv = process.argv.slice(2)[0],  //获取命令行参数
    Liftoff = require('liftoff'); //该模块用于执行命令是找到代理执行目录以便于找到对应conf文件
cli = new Liftoff({
  name: 'auto-establish',
  processTitle: 'auto',
  moduleName: 'auto-establish',
  configName: 'auto-conf',
  extensions: {
    '.js': null
  }
});
cli.launch({}, (env) => {
  var conf = env.configPath;
})
switch (argv) {
  case undefined:
  case 'run':
  console.log('run');
    break;
  case 'help':
  console.log("run: 启动监听服务\n后续功能敬请期待");
    break;
  default:
  console.log('此命令暂时不支持，请-h或-help查看支持命令以及用法');
    break;
}