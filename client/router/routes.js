
import Article from '@/article'
export default [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  name: '首页',
  meta: {
    title: 'this is app'
  },
  component: () => import('@/home'),
  children: [{
    path: '/article',
    name: '文章管理',
    meta: {
      title: 'leeadmin-文章管理'
    },
    component: Article
  }, {
    path: '/category',
    name: '分类管理',
    meta: {
      title: 'leeadmin-分类管理'
    },
    component: () => import('@/category')
  }, {
    path: '/label',
    name: '标签管理',
    meta: {
      title: 'leeadmin-标签管理'
    },
    component: () => import('@/label')
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
