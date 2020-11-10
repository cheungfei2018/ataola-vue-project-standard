import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
  config => config,
  err => Promise.reject(err)
);

axios.interceptors.response.use(
  resp => resp,
  err => Promise.reject(err)
);

function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(resp => {
        if (resp.status === 200) {
          resolve(resp.data);
        } else {
          reject(resp);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function post(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(resp => {
        if (resp.status === 200) {
          resolve(resp.data);
        } else {
          reject(resp);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export { get, post };
