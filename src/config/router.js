/**
 * 配置路由位置
 * @author 屈向前
 */
const RouterConfig=[
  {
    path: '/login',
    component: () => import('../routes/login/')
  },
  {
    path: '/admin',
    component: () => import('../routes/admin/mainframes'),
    routes:[
      {
        path: '/admin/dept',
        component: () => import('../routes/admin/dept'),
      },
      {
        path: '/admin/person',
        component: () => import('../routes/admin/person'),
      }
    ]
  }

]
export default RouterConfig
