import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.activated ? 'var(--orange-color)' : 'var(--blue-color)'};
  border-radius: .5rem;
  padding: 1.5rem 1.2rem;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  transition: background .1s;

  &:hover {
    background: var(--orange-color);
  }

  > img {
    width: 100%;
    max-width: 1.85rem;
    height: auto;
  }

  > span {
    color: var(--bg-main-color);
    font-weight: 500;
    align-self: flex-end;
    font-size: 1.4rem;
  }
`;
