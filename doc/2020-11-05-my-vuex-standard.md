# vuex 相关规范

## 方案一（不复杂业务场景）

- `store/index.js` ,主入口， 全局共享 state

- `store/mutation.js`, 对 state 同步的具体操作

- `store/mutation-types.js`, 对 state 同步操作的函数名定义

- `store/action.js`, 对 state 的异步操作
