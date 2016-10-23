import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Container from './Container'
import IndexPage from './indexPage/IndexPage'

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      {/* Lazy-loading */}
      <Route path="coc" getComponent={(location, cb) => {
          require.ensure([], (require) => {
            const mod = require('./coc/Coc');
            cb(null, mod.default);
          });
        }} />
      {/* inline loading */}
      <IndexRoute component={IndexPage} />
    </Route>
  )
}

export default makeMainRoutes
