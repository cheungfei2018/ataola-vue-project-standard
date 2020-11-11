# Vue 开发规范

> 养成一个良好的编码规范，不管是审阅代码还是 bug 调试都很有帮助的。------ 丰臣正一

## 一、命名

- 语义化明确，通俗易懂，例如 ataola 集团 oa 系统， ataola-group-oa

- 不推荐使用中文拼音缩写，推荐英文单词组合（中文拼音缩写可读性差）

- 不推荐使用中文命名（避免引发编码问题）

- 不推荐使用阿拉伯数字命名（只允许其出现在地图、图表类场景）

### 1.1 项目名

- 项目名采用小写字母，若多个单词中间用“-”连接

```
# recommend
ataola-group-oa

# not recommend
ataolaGroupOa

# not recomment
ataola_group_oa
```

### 1.2 目录名

- 统一小写字母表示，多个单词中间用“-”连接

- 绝大部分情况下，名词全称时有复数结构用复数结构表示， 缩写不用

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

- js、css、图片文件统一小写字母表示，多个单词中间用“-”连接

- 不推荐拼音缩写，要表达语言，通俗易懂

- vue 文件单词首字母大写

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

- 缩进使用 2 个空格（1 个 tab）

- 在操作符前后需要加空格，比如`+, -, \*, %, =`等操作符前后都应该存在一个空格

#### 1.4.1 js 文件

- 别搞拼音缩写，看着脑阔疼，增加阅读成本

- 方法名驼峰，类名单词首字母大写，变量多个单词用"-"，常量用大写。

- 字符串无特别情况一律使用单引号

- 方法名命名， 动词或者动词加名词

- 表示状态用形容词

- 表示判断用 `is_xxx`

- 所有名词禁用复数形式

- 尽可能不要使用 new Object()、new Array()等，用字面量{}、[]等代替

- 禁止使用任何 ES 关键字和保留字命名

```
关键字
break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield,

未来保留字：
enum, implements, interface, let, package, private, protected, public, static, await,

ES1-3中的保留关键字
abstract, boolean, byte, char, double, final, float, goto, int, long, native, short, synchronized, transient, volatile,

其他
undefined, null, true, false,
```

```
# 常量：
const BASE_URL = 'http://zhengjiangtao.cn'

# 变量： snake_case， 形容词(可选)+名词或名词词组
let hangzhou_house = '';

# 类：PascalCase

class RouterController {}

# 方法（函数）: camelCase， 常用动词或动词+名词

function getUserInfo() {}
```

#### 1.4.2 css 文件

- 类名中间用“-”， 比如`.header-logo`

- ID 名用驼峰制，比如`#loginBox`

- 命名语义化要强，可读性要好

- 属性能简写就不展开

- 属性键值对空一格， 且一个属性一行

- 属性顺序建议，宽高、颜色、字体、定位布局、动画

- 一些常用的高频词汇

  - 隐藏 hidden

  - 边框表格 bordered

  - 筛选框 filter

  - 分页器 pagination

#### 1.4.3 html 文件

- `<!DOCTYPE html>`声明 html 文档要加上，而且 doctype 大写

- html 文档中的属性使用双引号，而不是单引号

- 所有自定义属性：kebab-case，例如 `data-src=""`

- 标签最好语义化一点（例如用header、footer、sidebar取代div）

## 二、格式

### 2.1 JS 中的一些格式

- 能用解构语法尽量用解构语法

- 能够用 es6 以及高版本语法尽量用高版本语法

- 注意 对象、方法、判断、循环写法的空格问题

- 等号用"==="

- 如果上下文有 this 需要赋值，用 self（that 是那个，不推荐）

- 变量，参数，对象属性，JSON key：所有统一使用 snake_case

- 原则上倾向于句末加";"

- 技巧上倾向于最后一个对象属性值后面加","

- 每行声明都应该带上 let 或 const

- 在小括号前后应该存在空格（函数只应该在后面存在空格）

- 冒号后面应该存在一个空格

- 判断语句要跟大括号的，不可以简写

- 条件判断和循环最多三层

- 慎用console.log(), 性能问题

- 逗号用于变量声明的分隔或是元素的分隔, 如果逗号不在行结尾，后面需要一个空格，此外，逗号不允许出现在行首

- 在比较操作中，如果是无容忍的场景，尽量使用===代替==, 当判断容忍假值时，可以无需使用===或==，示例：当 foo 是 0、undefined、null、false、''时，!foo 都为真值

- js 中一些高频释意词汇

```
# DOM 操作相关

add()新增动作

modify()修改动作

erase()删除动作

# AJAX 操作相关

create()提交新增

update()提交修改

query()提交查询

remove()提交删除 禁止使用delete

```

```
# 常用单词释意

get 获取 / set 设置
add | append 添加 / delete 删除
create 创建 / destory 销毁
insert 插入 / remove 移除
start 启动 / stop 停止
open 打开 / close 关闭
read 读取 / write 写入
load 载入 / save 保存
begin 开始 / end 结束
backup 备份 / restore 恢复
import 导入 / export 导出
split 分割  / merge 合并
inject 注入 / extract 提取
attach 附着 / detach 脱离
bing 绑定 / separate 分离
edit 编辑
modify 修改
select 选取
mark 标记
copy 赋值
paste 粘贴
undo 撤销
redo 重做
view 查看
browse 浏览
clean 清理
clear 清除
index 索引
sort 排序
find 查找
sort 排序
increase 增加
decrease 减少
stop 停止
run 运行
launch 启动
compile 编译
execute 执行
debug 调试
trace 追踪
observe 观察
listen 监听
build 构建
publish 发布
input 输入 / output 输出
encode 编码 / decode 解码
encrypt 加密 / decrypt 解密
compress 压缩 / decompress 解压缩
pack  打包 / unpack  解包
push 推 / pull 拉
expand 展开 / collapse 折叠
lock 锁定 / unlock 解锁
check out 迁出 / check in 迁入
connet 连接 / disconnect 断开
send 发送 / receive 接收
download 下载 / upload 上传
play 播放 / pause 暂停
start 开始 / finish 结束
enter 进入 / exit 退出 | quit 退出
parse 解析
emit 传递
refresh 刷新
synchronize 同步
update 更新
revert 复原
submit 提交
commit  交付
abort 中止
obsolete 废弃
depreciate 废旧
collect 收集
aggregate 聚集
```

**相关示例：**

```js
const APP_NAME = '打工人加油打气系统';

function getTodayWeather(current_date) {}

const USERINFO = {
  username: 'ataola',
  age: 24,
  second_name: 'zjt',
};
```

```json
{
  "app_name": "打工人加油打气系统"
}
```

### 2.2 vue 中的一些格式

- 组件名：kebab-case，例如`<form-item></form-item>`

- v-bind：kebab-case，统一使用缩写:，例如`<form-item :data="username"></form-item>`

- v-on：kebab-case，统一使用缩写@，例如`<form-item @change="handleInput"></form-item>`

- prop必须加上required或者 default， 如果有业务要加validator校验

- 组件在样式上都应该加scoped来限定其作用域

- 标签元素属性过多要换行

- script标签内部结构顺序推荐 name -> components -> props -> data -> computed -> watch -> filter -> 钩子函数（beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestory、destoryed）

- 路由使用懒加载模式、history模式





## 三、注释

### html

- 注释符内部头尾应该各存在一个空格

```
<!-- annotation -->
```

### csss && less && css

- SCSS 和 CSS 无论单行还是多行均可使用`/* */`注释符，注释符内部头尾应该各存在一个空格

- SCSS 单行注释可用（建议使用）//，注释符和内容之间应该存在一个空格

- 如果使用中文注释必须在文件头部添加`@charset "UTF-8"`;，否则会编译出错

### JavaScript

#### 单行

仅可使用//，注释符和内容之间应该存在一个空格, 示例：`let foo = 'foo' // a statement.`

#### 多行

仅可使用如下格式，首行和尾行不应存在注释内容，且尾行以\*\*/结束

```
/*
 * This is a block annotation,
 * more than one line.
 **/
```

## 四、辅助

- 不建议给 IDE 全局配置，建议单独配置每个项目的格式检查之类的东西（全局配置的意思在这里是有问题你还是坚持你自己的答案，单独配置的意思是有问题如果错误答案站多数哪怕你的答案是对的，你也按照错误的来，但是你保留你的想法）

## 五、总结

### 5.1 常见的几种命名方式

- kebab-case (短横线)

- camelCase (驼峰式)

- snake_case (下划线)

- PascalCase (单词首字母大写)

- ALL_CAPS_SNAKE_CASE (大写下划线)

- COOKIE:SESSION:KEY (大写冒号)

### 5.2 HTTP 相关请求

#### options

预检

#### get

条件查询表格，获取页面数据等（严禁在带有密码域的提交中使用 GET 请求）

#### post

新增内容

#### put

更新页面

#### delete

删除数据

#### patch

####

## 参考文献

官方风格指南：https://cn.vuejs.org/v2/style-guide/
