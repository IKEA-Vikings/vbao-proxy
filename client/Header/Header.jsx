import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import Nav from './Nav.jsx';
import {Bar, Logo} from './styles_header.js';

function Header(props) {
  return (
    <Bar>
      <Logo>IKEA</Logo>
      <Search />
      <Nav />
    </Bar>
  );
}

export default Header;