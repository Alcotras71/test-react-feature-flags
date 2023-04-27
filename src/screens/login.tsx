import React from 'react';

import { PageLayout } from '../components/page-layout';
import { LoginForm } from '../components/login-form';

const LoginScreen = () => (
  <PageLayout className="login">
    <h1>Welcome back 👋</h1>
    <LoginForm />
  </PageLayout>
);

export default LoginScreen;
