/*
 * @Author: ataola
 * @Date: 2020-11-12 16:03:14
 * @Description 原生Ajax的封装
 * @Last Modified by: ataola
 * @Last Modified time: 2020-11-12 17:47:26
 */

const ASYNC_STATUS = new Map([
  ['async', true],
  ['sync', false]
]);

const createXhr = (function() {
  let xhr = null;
  return function() {
    if (!xhr) {
      if (window.ActiveXObject) {
        xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
      } else {
        xhr = new XMLHttpRequest();
      }
      return xhr;
    } else {
      return xhr;
    }
  };
})();

function isObject(obj) {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}

export const get = function(url, params = {}, headers = {}, type = 'async') {
  if (!url) {
    return false;
  }
  return new Promise((resolve, reject) => {
    const xhr = createXhr();
    let params_str = '';
    if (isObject(params) && params.keys && params.keys.length > 0) {
      for (const param in params) {
        params_str = param + '=' + params[param] + '&';
      }
      params_str = params_str.slice(0, -1);
    }
    const url_str = params_str ? url + '?' + params_str : url;
    xhr.open('GET', url_str, ASYNC_STATUS.get(type));
    if (isObject(headers) && headers.keys && headers.keys.length > 0) {
      for (const header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 0) {
        // console.log('readyState === 0, 请求未初始化');
      } else if (xhr.readyState === 1) {
        // console.log('readyState === 1, 服务器连接已建立');
      } else if (xhr.readyState === 2) {
        // console.log('readyState === 2, 请求已接收');
      } else if (xhr.readyState === 3) {
        // console.log('readyState === 3, 请求处理中');
      } else if (xhr.readyState === 4) {
        // console.log('readyState === 4, 请求已完成，且响应已就绪');
        if (xhr.status === 200) {
          const res = JSON.parse(xhr.responseText);
          resolve(res);
        }
      }
    };
    xhr.send(null);
  });
};

export const post = function(
  url,
  data = {},
  headers = {
    'Content-type': 'application/json'
  },
  type = 'async'
) {
  if (!url) {
    return false;
  }
  return new Promise((resolve, reject) => {
    const xhr = createXhr();
    xhr.open('POST', url, ASYNC_STATUS.get(type));
    if (isObject(headers) && headers.keys && headers.keys.length > 0) {
      for (const header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 0) {
        // console.log('readyState === 0, 请求未初始化');
      } else if (xhr.readyState === 1) {
        // console.log('readyState === 1, 服务器连接已建立');
      } else if (xhr.readyState === 2) {
        // console.log('readyState === 2, 请求已接收');
      } else if (xhr.readyState === 3) {
        // console.log('readyState === 3, 请求处理中');
      } else if (xhr.readyState === 4) {
        // console.log('readyState === 4, 请求已完成，且响应已就绪');
        if (xhr.status === 200) {
          const res = JSON.parse(xhr.responseText);
          resolve(res);
        }
      }
    };
    xhr.send(data);
  });
};
