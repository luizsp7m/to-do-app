import React from 'react';

import { Card, Top, Bottom } from './styles';

import DefaultIcon from '../../assets/default.png'

function Task() {
  return (
    <Card>
      <Top>
        <img src={DefaultIcon} alt="Ícone" />
        <span>Jogar futebol</span>
      </Top>

      <Bottom>
        <span>13/01/2021</span>
        <span>18:00</span>
      </Bottom>
    </Card>
  );
}

export default Task;