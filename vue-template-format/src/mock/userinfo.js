import Mock from 'mockjs';

const Radom = Mock.Random;

export default function processUserinfoData() {
  const userinfo = [];
  for (let i = 0; i < 66; i++) {
    const user = {
      id: Radom.id(),
      name: Radom.cname(),
      birth: Radom.date(),
      country: Radom.county(),
      thumb: Radom.dataImage('1366x768', '背景图')
    };
    userinfo.push(user);
  }
  return {
    code: 0,
    msg: '获取成功',
    data: userinfo
  };
}
