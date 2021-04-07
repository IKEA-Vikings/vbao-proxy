import styled from 'styled-components';
import {FONT, GRAY, WHITE, EGGSHELL, FONT_MED, FONT_LG} from '../style-constants.js';

export const Container = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
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
  vertical-align: middle;

  &:hover {
    border-color: ${GRAY};
  }
`;

export const Circle = styled.span`
  width: 24px;
  height: 24px;
`;

export const Link = styled.a`
  color: ${GRAY};

  &:visited {
    color: ${GRAY}
  }
`;