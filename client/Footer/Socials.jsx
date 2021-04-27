import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {Container, ListItem, Link} from './styles_socials.js';

library.add(fab);

function Socials(props) {
  return (
    <Container>
      <ListItem><Link href="#"><FontAwesomeIcon icon={["fab", "facebook"]} size="lg"/></Link></ListItem>
      <ListItem><Link href="#"><FontAwesomeIcon icon={["fab", "instagram"]} size="lg"/></Link></ListItem>
      <ListItem><Link href="#"><FontAwesomeIcon icon={["fab", "pinterest"]} size="lg"/></Link></ListItem>
      <ListItem><Link href="#"><FontAwesomeIcon icon={["fab", "twitter"]} size="lg"/></Link></ListItem>
      <ListItem><Link href="#"><FontAwesomeIcon icon={["fab", "youtube"]} size="lg"/></Link></ListItem>
    </Container>
  );
}

export default Socials;