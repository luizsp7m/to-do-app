import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Main = styled.div`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  padding: 2rem 0;

  > button {
    background: none;
    border: none;
    outline: 0;
  }
`

export const Tasks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`