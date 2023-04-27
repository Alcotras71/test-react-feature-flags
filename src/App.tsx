import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

import { RouterPaths } from './enum/router-paths';
import { PageLoader } from './components/page-loader';

import './index.css';

const LoginScreen = lazy(() => import('./screens/login'));
const DashboardScreen = lazy(() => import('./screens/dashboard'));

const RedirectToLogin = () => <Redirect to={RouterPaths.login} />;

export const App = () => (
  <Suspense fallback={<PageLoader />}>
    <Router>
      <Switch>
        <Route exact path={RouterPaths.login} component={LoginScreen} />
        <Route exact path={RouterPaths.dashboard} component={DashboardScreen} />
        <Route component={RedirectToLogin} />
      </Switch>
    </Router>
  </Suspense>
);
