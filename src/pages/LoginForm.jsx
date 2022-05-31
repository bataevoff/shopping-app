import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <input
        type="text"
        placeholder='Email'
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder='password'
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button>Логин</button>
      <button>Регистрация</button>
    </div>
  );
};

export default LoginForm;