import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { GlobalContext } from '../../contexts/GlobalContext';

import { Container } from './styled';

import logo from '../../assets/img/logo.png';
import { goToHome } from '../../routes/coordinator';

const Menu = () => {
  const context = useContext(GlobalContext);
  const { showMenu, setShowMenu } = context;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setShowMenu(location.pathname !== '/');
  }, [location.pathname]);

  return (
    <Container $showMenu={showMenu}>
      <div></div>

      <figure>
        <img src={logo} alt="Logo Labook" />
      </figure>

      <p className="text" onClick={() => goToHome(navigate)}>
        Entrar
      </p>
    </Container>
  );
};

export default Menu;
