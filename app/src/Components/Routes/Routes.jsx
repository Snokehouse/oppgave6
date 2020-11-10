import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/posts/create">
          <Create />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/ref">
          <Ref />
        </Route>
        <Route path="/side">
          <SideEffects />
        </Route>
        <Redirect exact from="/" to="/posts" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
