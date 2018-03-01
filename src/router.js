/***************************************
 * Author:
 * Date:
 * Desc:
 ***************************************
 * update: name    datetime      commit
           张三    17-03-01 17   增加...
 **************************************/
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './container/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
