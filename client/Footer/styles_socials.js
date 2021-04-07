import styled from 'styled-components';
import {FONT, GRAY, WHITE, EGGSHELL, FONT_MED, FONT_LG} from '../style-constants.js';

export const Container = styled.ul`
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: ${EGGSHELL};
  margin: 0;
  padding-bottom: 50px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  border-radius: 50%;
  padding: 5px;
  margin:8px;
  border: 1.5px solid ${WHITE};
  text-align: center;
  height: 24px;
  width: 24px;
  line-height: 24px;
  vertical-align: middle;

  &:hover {
    border-color: ${GRAY};
  }
`;

export const Link = styled.a`
  color: ${GRAY};
  line-height: 24px;
  text-align: center;
  vertical-align: middle;

  &:visited {
    color: ${GRAY}
  }
`;