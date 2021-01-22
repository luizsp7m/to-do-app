import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(0,0,0, .021);
  border: 1px solid rgba(0,0,0, .06);
  cursor: pointer;
  transition: background .1s;
  opacity: ${props => props.done ? .5 : 1};

  &:hover {
    background: rgba(0,0,0, .045);
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 100%;
    max-width: 10rem;
  }

  > span {
    margin: 1.5rem 0 2.5rem 0;
    color: var(--text-color);
    font-weight: 500;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    color: var(--orange-color);
  }

  > span + span {
    font-weight: 500;
    color: var(--text-color);
  }
`;