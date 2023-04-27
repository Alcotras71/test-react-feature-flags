import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { RouterPaths } from '../enum/router-paths';

export const LoginForm = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      history.push(RouterPaths.dashboard);
    }
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label htmlFor="username">
        Username
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
