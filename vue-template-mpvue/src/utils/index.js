import config from '@/config'

function request (url, method, data, header) {
  return new Promise((resolve, reject) => {
    mpvue.request({
      url: config.host + url,
      method,
      data,
      header,
      success: function (res) {
        if (res.data.error === 401) {
          mpvue.navigateTo({
            url: '/pages/auth/info/main'
          })
        } else {
          resolve(res.data)
        }
      }
    })
  })
}

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime,
  request
}
