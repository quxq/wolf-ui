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
        path: '/admin/templet1',
        component: () => import('../routes/admin/templet1'),
      }
    ]
  },
    {
        path: '/netdriver',
        component: () => import('../routes/netdriver'),
        routes:[
            {
                path: '/netdriver/allfile',
                component: () => import('../routes/netdriver/allfile'),
            },
          {
            path: '/netdriver/allfile/:id',
            component: () => import('../routes/netdriver/allfile'),
          },
            {
                path: '/netdriver/person',
                component: () => import('../routes/admin/person'),
            }
        ]
    },
  {
    path:'/pcenter',
    component:()=> import('../routes/pcenter'),
  }

]
export default RouterConfig
