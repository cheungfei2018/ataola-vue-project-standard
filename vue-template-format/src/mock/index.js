import Mock from 'mockjs';

import processUserinfoData from './userinfo';

Mock.mock('/api/userinfo', 'get', processUserinfoData);

export default Mock;
