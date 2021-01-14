import React from 'react';

import { Navbar, Container } from './styles';

import Logo from '../../assets/logo.png';
import { FaBell } from 'react-icons/fa';

function Header() {
  return (
    <Navbar>
      <Container>
        <img src={Logo} alt="Logo" />
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Nova tarefa</a>
          </li>
          <li>
          <a href="#">Sincronizar celular</a>
          </li>
          <li>
            <a href="#">
              <FaBell size={20} />
              <span className="notification">10</span>
            </a>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Header;