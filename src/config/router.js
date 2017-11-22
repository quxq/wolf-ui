/**
 * 配置路由位置
 * @author 屈向前
 */
const RouterConfig=[
  {
    path: '/login',
    component: () => import('../routes/login/'),
    routes:[
      {
        path: '/login/a',
        component: () => import('../routes/login/a'),
      },
      {
        path: '/login/b',
        component: () => import('../routes/login/b'),
      }
    ]
  }

]
export default RouterConfig
