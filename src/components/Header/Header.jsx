import React from 'react';
import { HeaderComp, Nav, NavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderComp>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Nav>
    </HeaderComp>
  );
};

export default Header;
