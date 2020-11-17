const host = process.env.NODE_ENV === 'production' ? 'http://zhengjiangtao.cn/api/v2' : 'http://localhost:3000';

const config = {
  host
};

export default config;
