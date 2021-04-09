import styled from 'styled-components';
import {GRAY, WHITE, EGGSHELL} from '../style-constants.js';

export const Icon = styled.span`
  line-height: 35px;
  text-align: center;
  vertical-align: middle;
`;

export const Link = styled.a`
  display: inline-block;
  margin: 0 5px;
  border-radius: 50px;
  line-height: 35px;
  text-align: center;
  vertical-align: middle;

  width: 35px;
  height: 35px;

  &:hover {
    background-color: ${EGGSHELL};
  }

  &:visited {
    color: black;
  }
`;