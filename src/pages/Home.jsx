import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Timer from '../components/Timer';

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
      <Timer minutes={1} />
    </div>
  );
};

export default Home;
