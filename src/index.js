import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {HomePage, UsersDetail} from './asyncRoutes';

ReactDom.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact={true} path="/" component={HomePage}/>
      <Route exact={true} path="/users" component={UsersDetail}/>
    </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));
