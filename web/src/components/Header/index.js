import React from 'react';

import { Navbar, Container } from './styles';

import Logo from '../../assets/logo.png';
import { FaBell } from 'react-icons/fa';

function Header({ lateCount, clickNotification }) {
  return (
    <Navbar>
      <Container>
        <img src={Logo} alt="Logo" />

        <div className="menu-toggle">
          <div></div>
          <div></div>
          <div></div>
        </div>

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
            <button onClick={clickNotification}>
              <FaBell size={22} />
              <span className="notification">{lateCount}</span>
            </button>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Header;