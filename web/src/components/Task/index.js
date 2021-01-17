import React, { useMemo } from 'react';

import { Card, Top, Bottom } from './styles';

import { format } from 'date-fns';

import DefaultIcon from '../../assets/default.png'

function Task({ type, title, when }) {

  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));

  return (
    <Card>
      <Top>
        <img src={DefaultIcon} alt="Ícone" />
        <span>{title}</span>
      </Top>

      <Bottom>
        <span>{date}</span>
        <span>{hour}</span>
      </Bottom>
    </Card>
  );
}

export default Task;