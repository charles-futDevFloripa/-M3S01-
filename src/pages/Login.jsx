import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Página de Login</h2>
      <form>
        <div>
          <label>E-mail:</label>
          <input type='email' name='email' required />
        </div>
        <div>
          <label>Senha:</label>
          <input type='password' name='password' required />
        </div>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
