import React, { useEffect, useState } from 'react';

import { Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, QrCodeArea, ValidationCode } from './styles';

import Qr from 'qrcode.react';

function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMac() {
    if (!mac)
      alert('Você precisa informar o número que apareceu no celular');
    else {
      await localStorage.setItem('@todo/macaddress', mac);
      setRedirect(true);
      window.location.reload();
    }
  }

  return (
    <Container>
      { redirect && <Redirect to="/" />}
      <Header />
      <Content>
        <h1>Capture o QRCODE pelo APP</h1>
        <QrCodeArea>
          <Qr value="getmacaddress" size={200} />
        </QrCodeArea>

        <ValidationCode>
          <span>Digite a numeração que apareceu no celular</span>
          <input type="text" onChange={event => setMac(event.target.value)} />
          <button type="button" onClick={SaveMac}>Sincronizar</button>
        </ValidationCode>
        <p>suas atividades serão sincronizadas com a do seu celular</p>
      </Content>
      <Footer />
    </Container>
  );
}

export default QrCode;