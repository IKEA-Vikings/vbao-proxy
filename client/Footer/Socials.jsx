import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {Container, ListItem, Link, Circle} from './styles_socials.js';

library.add(fab);

function Socials(props) {
  return (
    <Container>
      <ListItem><Link href="#"><Circle><FontAwesomeIcon icon={["fab", "facebook"]} size="lg"/></Circle></Link></ListItem>
      <ListItem><Link href="#"><Circle><FontAwesomeIcon icon={["fab", "instagram"]} size="lg"/></Circle></Link></ListItem>
      <ListItem><Link href="#"><Circle><FontAwesomeIcon icon={["fab", "pinterest"]} size="lg"/></Circle></Link></ListItem>
      <ListItem><Link href="#"><Circle><FontAwesomeIcon icon={["fab", "twitter"]} size="lg"/></Circle></Link></ListItem>
      <ListItem><Link href="#"><Circle><FontAwesomeIcon icon={["fab", "youtube"]} size="lg"/></Circle></Link></ListItem>
    </Container>
  );
}

export default Socials;