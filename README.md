## tomato-work ![GitHub package.json version](https://img.shields.io/github/package-json/v/xjh22222228/tomato-work) ![GitHub](https://img.shields.io/github/license/xjh22222228/tomato-work)
**个人事务管理系统**
学习redux的项目，完全参考以下的大神进行学习。大家请移步。

WEB：[tomato-work](https://github.com/xjh22222228/tomato-work)



## Tech
核心技术 React纯hooks/TypeScript/Redux/Antd/PWA
``` json
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-redux": "^7.1.3",
"redux": "^4.0.5",
"react-router-dom": "^5.1.2",
"redux-thunk": "^2.3.0",
"typescript": "^3.7.2",
"antd": "^3.26.7",
"axios": "^0.19.0",
"blueimp-md5": "^2.12.0",
"moment": "^2.24.0",
"lodash": "^4.17.15",
"query-string": "^6.9.0",
"webpack": "4.41.2",
"bizcharts": "^3.5.6",
"tui-editor": "^1.4.10"
```


## Build Setup
``` bash
# install dependencies
yarn or npm install

# serve with hot reload at localhost:9663
yarn start or npm start

# build for production with minification
yarn build or npm run build
```


## License
[MIT](https://opensource.org/licenses/MIT)





## 使用Jenkins进行持续部署
``` shell
// 下载工作区npm依赖包
npm install
// 删除dist目录下的所有文件,dist目录即为当前jenkins工作区打包后的文件
rm -rf ./dist/*
// 执行打包命令
npm run build
// 删除服务器上/www/wwwroot/tomato_work/文件夹下的所有文件
rm -rf /www/wwwroot/tomato_work/*
// 把当前构建工作区dist目录里的文件 copy 到服务器/www/wwwroot/tomato_work/文件夹下
cp -rf ./dist/* /www/wwwroot/tomato_work/
```

## Jenkins配置
[阿里云服务器配置Jenkins自动打包部署vue项目](https://juejin.im/post/5d944b55e51d4578414c43ac)
**注意点**：
### Jenkins一定要添加全局变量，不然会报
`npm is not a command `
[解决方案](https://blog.csdn.net/u011296165/article/details/96110294)
### Jenkins部署时要修改配置文件，不然没有权限操作服务器
[Jenkins部署踩坑之旅](https://www.jianshu.com/p/a9570e5a025a)