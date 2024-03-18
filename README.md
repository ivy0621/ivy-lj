# 公共模块项目
## 初始化
> yarn install && yarn run bootstrap // 最好复制在命令行内执行
> lerna publish

## 简介
项目基于[lerna](https://lerna.js.org/)架构，文档：[github](https://github.com/lerna/lerna#readme)

## 项目结构
+ packages文件夹 存放所有公共modules
+ lerna.json是lerna配置
+ .babelrc 目前作为所有项目的公用配置（这并不是推荐的，每一个包应该有自己的配置）。
+ package.json 项目配置 由于我们使用的是项目单独版本号 所以此处一般不需要改

## packages下module要求
+ src 存放源码 建议提供一个index作为入口 方便集中引用
+ dist作为编译后目录 package.json的files应该包括dist
+ package.json  files应该包括dist，必须有build命令的配置，name字段必须是以@lm/开头

## 使用
> yarn add @ivy/xxx

## 安装依赖
> 给packages/*安装依赖，在最外层执行
+ 给components安装react依赖：
    lerna add react --scope=@lm/components
+ 给components的devDependencies安装@type/react依赖：
    lerna add @type/react --scope=@lm/components --dev
+ 所有模块安装babel-core：
    lerna add babel-core

## 发布
+ 分支上发布minor，用于测试
+ 主干上发布正式
