/**
 * 配置路由位置
 * @author 屈向前
 */
const RouterConfig=[
  {
    path: '/login',
    component: () => import('../routes/login/'),
  }
]
export default RouterConfig
