import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingBasket, faBars} from '@fortawesome/free-solid-svg-icons';
import {faUser, faHeart} from '@fortawesome/free-regular-svg-icons';


function Nav(props) {
  return (
    <nav>
      <span><FontAwesomeIcon icon={faUser} size="lg"/></span>
      <span><FontAwesomeIcon icon={faHeart} size="lg"/></span>
      <span><FontAwesomeIcon icon={faShoppingBasket} size="lg"/></span>
      <span><FontAwesomeIcon icon={faBars} size="lg"/></span>
    </nav>
  );
}

export default Nav;