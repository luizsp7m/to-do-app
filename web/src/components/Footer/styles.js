import styled from 'styled-components';

export const Container = styled.div`
  background: var(--blue-color);
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: .45rem solid var(--orange-color);
  position: fixed;
  bottom: 0;
  width: 100%;

  > p {
    color: var(--bg-main-color);
    font-weight: 500;
  }
`;
