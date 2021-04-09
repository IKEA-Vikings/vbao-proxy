import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faShoppingBasket, faBars} from '@fortawesome/free-solid-svg-icons';
import {faUser, faHeart} from '@fortawesome/free-regular-svg-icons';
import {Icon, Link} from './styles_nav.js';

function Nav(props) {
  return (
    <nav>
      <Link href="#">
        <Icon>
          <FontAwesomeIcon icon={faUser} size="lg"/>
        </Icon>
      </Link>
      <Link href="#">
        <Icon>
          <FontAwesomeIcon icon={faHeart} size="lg"/>
        </Icon>
      </Link>
      <Link href="#">
        <Icon>
          <FontAwesomeIcon icon={faShoppingBasket} size="lg"/>
        </Icon>
      </Link>
      <Link href="#">
        <Icon>
          <FontAwesomeIcon icon={faBars} size="lg"/>
        </Icon>
      </Link>
    </nav>
  );
}

export default Nav;