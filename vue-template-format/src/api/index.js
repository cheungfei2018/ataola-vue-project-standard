import config from '@/config';
const BASEURL = config.host;

export function fetchData() {
  return request({
    method: 'get',
    url: `${BASEURL}/..../....`
  });
}
