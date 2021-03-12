import styled from 'styled-components';

export const Navbar = styled.div`
  background: var(--blue-color);
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: .45rem solid var(--orange-color);
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 100%;
    max-width: 10rem;
    height: auto;
    margin: 0 2rem;
  }

  > ul {
    list-style: none;
    display: flex;
    align-items: center;
  }

  > ul li {
    > button.logout {
      text-decoration: none;
      margin: 0 3rem 0 2rem;
      color: var(--bg-main-color);
      font-weight: bold;
      font-size: 1.5rem;
      transition: color .1s;
      position: relative;

      &:hover {
        color: var(--orange-color);
      }
    }

    > button {
      border: none;
      background: none;
      position: relative;
      transition: color .1s;
      cursor: pointer;
      color: var(--bg-main-color);

      &:hover {
        color: var(--orange-color);
      }
    }
  }

  > ul li a {
    text-decoration: none;
    margin: 0 2rem;
    color: var(--bg-main-color);
    font-weight: bold;
    font-size: 1.5rem;
    transition: color .1s;
    position: relative;

    &:hover {
      color: var(--orange-color);
    }
  }

  > ul li a .notification {
    position: absolute;
  }

  @media(max-width: 630px) {
    > ul {
      display: none;
    }

    .menu-toggle {
      
    }
  }
`;
