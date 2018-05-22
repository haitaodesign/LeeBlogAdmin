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
  component: () =>
      import('../views/home/index.vue')
}]
