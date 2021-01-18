import React, { useMemo } from 'react';

import { Card, Top, Bottom } from './styles';

import { format } from 'date-fns';

import typeIcons from '../../utils/typeIcons';

function Task({ type, title, when }) {

  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));

  return (
    <Card>
      <Top>
        {console.log(type)}
        <img src={typeIcons[type]} alt="Ícone" />
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