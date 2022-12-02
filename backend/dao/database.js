var mysql =require('mysql')
const  db = mysql.createPool({
    host: '127.0.0.1', //数据库地址
    port: '3306',//端口号
    user: 'root',//用户名
    password: 'qweasd234',//密码
    database: 'user'//数据库名称
});
module.exports =  db;
