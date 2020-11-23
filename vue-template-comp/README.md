# vue-template-comp

## Vue组件设计

* 目录结构规范（参照element）

* 设计思想

* package.json

 * description 组件库的描述文本

 * keywords 组件库的关键词

 * license 许可协议

 * repository 组件库关联的git仓库地址

 * homepage 组件库展示的首页地址

 * main 组件库的主入口地址(在使用组件时引入的地址)

 * private 声明组件库的私有性,如果要发布到npm公网上,需删除该属性或者设置为false

 * publishConfig 用来设置npm发布的地址,这个配置作为团队内部的npm服务器来说非常关键,可以设置为私有的npm仓库

* 版本管理（Major.Minor.Patch）

	* Major 表示主版本号，做了不兼容的API修改时需要更新

	* Minor 表示次版本号，做了向下兼容的功能性需求时需要更新

	* Patch 表示修订号, 做了向下兼容的问题修正时需要更新

```
npm version patch
npm version minor
npm version major
```

## 参考

* 徐小夕的文章
