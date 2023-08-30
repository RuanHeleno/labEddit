import { useState } from 'react';
import PropTypes from 'prop-types';

import { GlobalContext } from './GlobalContext';

function GlobalState({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = {
    showMenu,
    setShowMenu,
    nickname,
    setNickname,
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}

GlobalState.propTypes = {
  children: PropTypes.node, // Validação para a prop 'children'
};

export default GlobalState;
