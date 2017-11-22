import { Route } from 'dva/router'
import dynamic from 'dva/dynamic'

const DynamicRoute = ({ component: Component,path, ...param }) => (
  <Route path={path} render={props => (
    <Component {...props} {...param}/>
  )}/>
)

const DynamicSubRoute =({...param})=>(
  //console.log(param)
  <div>
    {
      param.routes.map(({path, ...dynamics}, key) => (
        <DynamicRoute
          key ={key}
          path={path} {...dynamics}
          component={dynamic({
            ...dynamics,
          })}
        />))
    }
  </div>
)

export default { DynamicRoute,DynamicSubRoute}
