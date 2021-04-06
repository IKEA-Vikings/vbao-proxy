import styled from 'styled-components';
import {FONT, GRAY, WHITE, EGGSHELL, FONT_MED, FONT_LG} from '../style-constants.js';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;

  font-family: ${FONT};
  color: ${GRAY};
  font-size: ${FONT_MED};

  background-color: ${EGGSHELL};
`;

export const Header = styled.h1`
  font-size: ${FONT_LG};
  color: black;
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${GRAY};

  &:visited {
    color: ${GRAY};
  }
`;