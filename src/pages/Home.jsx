import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Página Inicial</h2>
      <p>Bem-vindo à Página Inicial!</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Home;
