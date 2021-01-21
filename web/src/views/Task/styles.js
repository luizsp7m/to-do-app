import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Form = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 2rem auto;
  padding: 0 1rem;
  margin-bottom: 10rem;
`;

export const TypeIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  .activated {
    opacity: 1;
  }

  > img {
    width: 100%;
    max-width: 5rem;
    margin: 0 .5rem;
    cursor: pointer;
    opacity: .5;
    transition: opacity .1s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  > span {
    margin-bottom: 1rem;
    color: #707070;
  }

  > input {
    font-size: 1.6rem;
    outline: none;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid var(--orange-color);
  }

  > textarea {
    font-size: 1.6rem;
    outline: none;
    padding: 1rem;
    border-color: var(--orange-color);
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  > div {
    display: flex;
    align-items: center;

    > input {
      cursor: pointer;
      height: 2rem;
      width: 2rem;
    }

    > span {
      margin-left: 1rem;
      font-weight: 500;
      color: var(--blue-color);
    }
  }

  > button {
    color: var(--orange-color);
    font-weight: 500;
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
  }
`

export const Save = styled.div`
  > button {
    width: 100%;
    background: var(--orange-color);
    border: none;
    outline: none;
    padding: 2rem;
    font-size: 1.7rem;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    transition: opacity .1s ease;

    &:hover {
      opacity: .85;
    }
  }
`