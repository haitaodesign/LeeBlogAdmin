
import Article from '@/article'
export default [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  name: '首页',
  redirect: '/article',
  meta: {
    title: 'this is app'
  },
  component: () => import('../views/home/index.vue'),
  children: [{
    path: '/article',
    name: '文章',
    meta: {
      title: 'this article list'
    },
    component: Article
  }]
}]
