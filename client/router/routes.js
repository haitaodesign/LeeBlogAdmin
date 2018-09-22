
import Article from '@/article'
export default [{
  path: '/',
  name: '首页',
  meta: {
    title: '首页'
  },
  redirect: '/article',
  component: () => import('@/home'),
  children: [{
    path: '/article',
    name: '文章管理',
    meta: {
      title: 'leeadmin-文章管理'
    },
    component: Article
  }, {
    path: 'article/addArticle',
    name: '新建文章',
    meta: {
      title: 'leeadmin-新建文章'
    },
    component: () => import('@/article/addArticle')
  }, {
    path: '/category',
    name: '分类管理',
    meta: {
      title: 'leeadmin-分类管理'
    },
    component: () => import('@/category')
  }, {
    path: '/tag',
    name: '标签管理',
    meta: {
      title: 'leeadmin-标签管理'
    },
    component: () => import('@/tag')
  }, {
    path: '/user',
    name: '用户管理',
    meta: {
      title: 'leeadmin-用户管理'
    },
    component: () => import('@/user')
  }]
}, {
  path: '/login',
  name: '登录',
  component: () => import('@/login')
}]
