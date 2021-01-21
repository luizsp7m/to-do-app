import React from 'react';

import { Navbar, Container } from './styles';

import Logo from '../../assets/logo.png';
import { FaBell } from 'react-icons/fa';

import { Link } from 'react-router-dom';

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
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/task">Nova tarefa</Link>
          </li>
          <li>
          <Link>Sincronizar celular</Link>
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