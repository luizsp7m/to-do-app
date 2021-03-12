import React, { useEffect, useState } from 'react';

import { Navbar, Container } from './styles';

import Logo from '../../assets/logo.png';
import { FaBell } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`).then(response => {
      setLateCount(response.data.length);
    });
  }

  useEffect(() => {
    lateVerify();
  }, []);

  async function Logout() {
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }

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

          {isConnected ? (
            <li>
              <button type="button" className="logout" onClick={Logout}>Sair</button>
            </li>
          ) : (
              <li>
                <Link to="/qrcode">Sincronizar celular</Link>
              </li>
            )}

          <li>
            {lateCount && (
              <button onClick={clickNotification}>
                <FaBell size={22} />
                <span className="notification">{lateCount}</span>
              </button>
            )}
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Header;