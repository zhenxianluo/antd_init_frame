# 项目说明
框架模板,用于下次快速开发.

# 技术体系
## 主要工具版本及说明
工具名 | 版本 | 介绍 | 地址
:-: | :-: | :-: | :-:
antd | ^3.1.1 | ui框架 | [中文官网](https://ant.design/docs/react/introduce-cn)
dva | ^2.1.0 | react前端框架 | [官方github](https://github.com/dvajs/dva)
roadhog | ^2.0.6 | 配置工具 | [官方github](https://github.com/sorrycc/roadhog)
react | ^16.2.0 | - | [官网](https://reactjs.org)
node | v9.1.0 | - | [官网](https://nodejs.org/en/)
npm | 5.5.1 | - | [官网](https://www.npmjs.com/)

其中dva为阿里前端架构师陈成带领团队开发的,官网对dva的介绍: **基于redux、redux-saga和react-router的轻量级前端框架**.roadhog是dva的配套工具,简化webpack的配置.

## 推荐工具
1. nvm: node管理及切换工具, [github地址](https://github.com/creationix/nvm)
2. yarn: 替代npm, 加速项目依赖包的安装, [官网](https://yarnpkg.com/zh-Hans/)

## 需要掌握的知识
dva框架集成以下内容,需要熟悉下,跟着dva和官方介绍会用即可.
* **点击名称进入官网**
1. [ES6](http://es6.ruanyifeng.com/)
2. [react-router](https://github.com/ReactTraining/react-router)
3. [react-redux](https://github.com/reactjs/react-redux), [推荐学习](https://github.com/kenberkeley/redux-simple-tutorial)
4. [webpack](https://webpack.js.org/)
5. [eslint](http://eslint.cn/docs/rules/)
6. [less](http://lesscss.org/)
7. [学习Python及前端知识的博客推荐](http://howduudu.xyz)

# 项目介绍
## 目录说明
```
.
├── documents        # 项目文档
├── mock             # 模拟数据
├── package.json     # 项目信息
├── public           # 公共目录,存放图片等网络资源
├── README.md        # 项目说明文件
├── src              # 项目主目录
│   ├── assets
│   ├── components   # 组件
│   ├── container    # 页面构成
│   ├── index.css
│   ├── index.js     # 入口
│   ├── models       # redux模型
│   ├── router.js    # 路由
│   ├── services     # 服务类型工具
│   └── utils        # 其它工具
└── yarn.lock
```
