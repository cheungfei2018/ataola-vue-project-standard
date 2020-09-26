# Vue 开发规范

> 养成一个良好的编码规范，不管是审阅代码还是bug调试都很有帮助的。------ 丰臣正一


## 一、命名

* 语义化明确，通俗易懂，例如ataola集团oa系统， ataola-group-oa

* 不推荐使用中文拼音缩写，推荐英文单词组合（中文拼音缩写可读性差）

* 不推荐使用中文命名（避免引发编码问题）

* 不推荐使用阿拉伯数字命名（只允许其出现在地图、图表类场景）

### 1.1 项目名

* 项目名采用小写字母，若多个单词中间用“-”连接

```
# recommend
ataola-group-oa

# not recommend
ataolaGroupOa

# not recomment
ataola_group_oa
```

### 1.2 目录名

* 统一小写字母表示，多个单词中间用“-”连接

* 绝大部分情况下，名词全称时有复数结构用复数结构表示， 缩写不用

```
src/api: 存放接口文件

src/filters：存放过滤器

src/plugins: 存放插件

src/directives: 存放自定义指令

src/assets/scripts(js): 存放项目相关js脚本

src/assets/(styles | stylesheets)(css | less | sass): 存放项目相关css样式表

src/assets/css/layouts: css布局文件

src/assets/css/commons: css通用文件

src/assets/fonts: 存放项目字体文件

src/assets/images(img): 存放项目图片文件

src/assets/images/banners: 存放项目轮播图

src/assets/images/backgrounds(bg): 存放背景图

src/assets/images/logos: 存放相关品牌logo，由于可能不同位置logo不同，所以单独拎出来

src/assets/images/icons: 存放icon图标

src/assets/lib: 存放类库文件

src/data(datum): 符合开发习惯，这里推荐data，比如说地图的经纬度数据包可以放这里

src/components: 存放vue组件

src/components/commons: 存放通用组件

src/components/maps: 存放地图相关组件

src/components/charts: 存放图表相关组件

src/components/forms: 存放表单相关组件

src/router: 存放路由相关组件

src/views: 存放视图相关页面

src/layouts: 存放视图相关布局

src/utils: 通用工具包

src/store: 全局状态

src/store/modules: 全局状态模块（如果项目复杂建议拆分）

src/store/actions: 全局状态异步相关操作

src/store/mutations: 全局状态同步相关操作

src/App.vue: vue根组件

src/main.js: vue入口文件（主文件）

mocks: 模拟后端数据服务器

config: 配置文件

test: 测试目录

```

### 1.3 文件名

* js、css、图片文件统一小写字母表示，多个单词中间用“-”连接

* 不推荐拼音缩写，要表达语言，通俗易懂

* vue文件单词首字母大写

```
# Vue组件命名, 以添加笔记监控任务、笔记监控任务列表、笔记监控任务详情; 添加商品监控任务、商品监控任务列表、笔记监控任务详情为例(重心是监控任务，然后下一级任务的种类，比如笔记的任务、商品的任务， 再下去是行为，比如添加、详情、列表)

TaskMonitorNoteAdd.vue

TaskMonitorNoteList.vue

TaskMonitorNoteDetail.vue

TaskMonitorProductAdd.vue

TaskMonitorProductList.vue

TaskMonitorProductDetail.vue

# js文件

open-window.js

# css文件

open-window.css

# 图片文件(如果有icon文件夹包裹)

chart.svg

chart-selected.svg

# 图片文件(如果没有icon文件夹包裹)

icon-chart.svg

icon-chart-selected.svg

```

### 1.4 文件内容

* 缩进使用2个空格（1个tab）

#### 1.4.1 js文件

* 别搞拼音缩写，看着脑阔疼，增加阅读成本

* 方法名驼峰，类名单词首字母大写，变量多个单词用"-"，常量用大写。

* 字符串无特别情况一律使用单引号

* 方法名命名， 动词或者动词加名词

```
# 常量
BASE_URL = 'http://zhengjiangtao.cn'

# 变量
let hangzhou_house = '';

# 类

class RouterController {}

# 方法

function getUserInfo() {}
```

#### 1.4.2 css文件

* 类名中间用“-”， 比如`.header-logo`

* ID名用驼峰制，比如`#loginBox`

* 命名语义化要强，可读性要好

* 属性能简写就不展开

* 属性键值对空一格， 且一个属性一行

* 属性顺序建议，宽高、颜色、字体、定位布局、动画


#### 1.4.3 html文件

* `<!DOCTYPE html>`声明html文档要加上，而且doctype大写

* html文档中的属性使用双引号，而不是单引号


## 二、格式

### 2.1 JS中的一些格式

* 能用解构语法尽量用解构语法

* 能够用es6以及高版本语法尽量用高版本语法

* 注意 对象、方法、判断、循环写法的空格问题

* 等号用"==="

* 如果上下文有this需要赋值，用self（that是那个，不推荐）


### 2.2 vue中的一些格式

## 三、语法

## 四、辅助

* 不建议给IDE全局配置，建议单独配置每个项目的格式检查之类的东西（全局配置的意思在这里是有问题你还是坚持你自己的答案，单独配置的意思是有问题如果错误答案站多数哪怕你的答案是对的，你也按照错误的来，但是你保留你的想法）



## 参考文献

官方风格指南：https://cn.vuejs.org/v2/style-guide/

