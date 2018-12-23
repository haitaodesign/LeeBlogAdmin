import config from '../../config'
const { devUrl, prodUrl } = config
export default () => {
  // 获取当前浏览器的host
  const host = window.location.host.split(':')[0]
  let currentUrl = '' || devUrl
  if (host === 'localhost' || '0.0.0.0') {
    currentUrl = devUrl
  } else {
    currentUrl = prodUrl
  }
  console.info('当前接口地址：', currentUrl)
  return currentUrl
}
