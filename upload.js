'use strict'
// 引入scp2
var client = require('scp2');
// 下面三个插件是部署的时候控制台美化所用 可有可无
const ora = require('ora');
const chalk = require('chalk');
const spinner = ora(chalk.green('正在发布到服务器...'));
spinner.start();

client.scp('./dist/', {    // 本地打包文件的位置
    "host": '47.96.165.193', // 服务器的IP地址
    "port": '22',            // 服务器端口， 一般为 22
    "username": 'root',       // 用户名
    "password": 'XueGang123.',     // 密码
    "path": '/home/software/tomcat/webapps/dass'            // 项目部署的服务器目标位置
}, err =>{
    spinner.stop();
    if (!err) {
        window.console.log(chalk.green("项目发布完毕!"))
    } else {
        window.console.log("err", err)
    }
})