const jsonTree = require('@aximario/json-tree')

/**
 * 返回一个数组对象，包含多个树结构
 * @param {数组，扁平化数据} data
 * @param {配置对象 id，parent_id, children} config
 * 此方法有个缺陷就是没有对参数进行校验，出错时没有提示，需要优化
 */
export const getJsonTree = (data, config) => {
  return jsonTree(data, config)
}
