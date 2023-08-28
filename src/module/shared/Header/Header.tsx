import styled from 'styled-components';
import logoDesktop from './../../../assets/images/logo-desktop.png';

const HeaderElement = styled.header`
  margin: 20px;
`;

export const Header = () => (
  <HeaderElement>
     <img
        src={logoDesktop}
        alt="Nice gadgets logo"
      ></img>
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Phones</a>
        </li>
        <li>
          <a href="#">Tablets</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
      </ul>
    </nav>
  </HeaderElement>
);
