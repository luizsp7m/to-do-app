import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 14rem);

  > h1 {
    color: var(--orange-color);
  }

  > p {
    color: var(--blue-color);
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const QrCodeArea = styled.div`
  margin: 2rem 0;
`;

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  > span {
    color: #333;
  }

  > input {
    margin: 1rem 0;
    height: 4rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    text-align: center;
    color: #555;
  }

  > button {
    height: 5rem;
    border: none;
    background: var(--orange-color);
    color: #fff;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
  }
`