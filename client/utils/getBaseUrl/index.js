import config from '../../config'
const { devUrl, prodUrl } = config
export default () => {
  // 开发环境url
  const devUrls = [{
    host: 'localhost'
  }, {
    host: '0.0.0.0'
  }]
  // 获取当前浏览器的host
  const host = window.location.host.split(':')[0]
  let currentUrl = ''
  devUrls.forEach(item => {
    if (item.host === host) {
      currentUrl = devUrl
    } else {
      currentUrl = prodUrl
    }
  })
  return currentUrl
}
