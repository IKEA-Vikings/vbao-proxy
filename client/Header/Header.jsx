import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import Nav from './Nav.jsx';

function Header(props) {
  return (
    <div>
      <div>
        <img src="https://www.ikea.com/us/en/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg"/>
      </div>
      <Search />
      <Nav />
    </div>
  );
}

export default Header;