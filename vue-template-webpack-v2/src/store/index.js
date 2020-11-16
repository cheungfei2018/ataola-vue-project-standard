import Vue from 'vue';
import Vuex from 'vuex';
import {
  IS_LOGIN,
  IS_REGISTER,
  IS_LOADING,
  IS_SEARCH,
  IS_FOOTER,
  IS_BACK,
  IS_SHARE,
  LOGIN,
  LOUOUT,
  REGISTER
} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 相关的判断状态
    judge: {
      // 是否登录
      is_login: true,
      // 是否注册
      is_register: false,
      // 是否加载
      is_loading: false,
      // 是否显示搜索
      is_search: true,
      // 是否显示底部
      is_footer: true,
      // 是否显示返回按钮
      is_back: false,
      // 是否显示分享按钮
      is_share: false
    },
    // 相关的用户信息
    userinfo: {
      name: 'guest',
      password: 'guest',
      nickname: 'guest',
      avatar: ''
    },
    // 相关的页面配置
    page: {
      title: ''
    }
    // 相关的权限控制
  },
  getters: {},
  mutations: {
    [IS_LOGIN](state) {
      return state.judge.is_login;
    },
    [IS_REGISTER](state) {
      return state.judge.is_register;
    },
    [IS_LOADING](state) {
      return state.judge.is_loading;
    },
    [IS_SEARCH](state) {
      return state.judge.is_search;
    },
    [IS_FOOTER](state) {
      return state.judge.is_footer;
    },
    [IS_BACK](state) {
      return state.judge.is_back;
    },
    [IS_SHARE](state) {
      return state.judge.is_share;
    },
    [LOGIN](state) {
      // 思考中
    },
    [LOUOUT](state) {
      // 思考中
    },
    [REGISTER](state) {
      // 思考中
    }
  },
  actions: {},
  modules: {}
});
