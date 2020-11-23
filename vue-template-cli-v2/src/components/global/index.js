// 引入自定义全局模态框组件
import Modal from './Modal';

const components = {
  Modal
};

// install 是默认的方法。当外界在 Vue.use() 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });

  install.installed = true;
};

install.installed = false;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

// 定义组件库和install对象
const globalComp = {
  ...components,
  install
};
// 导出
export default globalComp;
