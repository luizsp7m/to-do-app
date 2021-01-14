import React from 'react';

import { Container } from './styles';

import FilterIcon from '../../assets/filter.png';

function Filter({ title, activated }) {
  return (
    <Container activated={activated}>
      <img src={FilterIcon} alt="Filtro"/>
      <span>{title}</span>
    </Container>
  );
}

export default Filter;