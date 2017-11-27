import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from 'routes/app'
import { DynamicRoute } from 'utils'
import  * as commonfunc from 'utils/commonfunc'
import {RouterConfig} from 'config'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })

  return (
    <ConnectedRouter history={history}>
      <App>
       <Switch>
          <Route exact path="/" render={() => (<Redirect to="/netdriver/allfile" />)} />
           {
             RouterConfig.map(({ path, ...dynamics }, key) => (
               <DynamicRoute key={key}
                      path={path} {...dynamics} {...commonfunc}
                      component={dynamic({
                        app,
                        ...dynamics,
                      })}
               />
             ))
           }
          <Route component={error}></Route>
       </Switch>
      </App>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
