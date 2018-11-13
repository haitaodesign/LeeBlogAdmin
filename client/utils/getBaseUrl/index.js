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
  let currentUrl = '' || devUrl
  devUrls.forEach((item) => {
    if (item.host === host) {
      currentUrl = devUrl
    } else {
      currentUrl = prodUrl
    }
  })
  console.info('当前接口地址：', currentUrl)
  return currentUrl
}
