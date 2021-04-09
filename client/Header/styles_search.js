import styled from 'styled-components';
import {FONT, GRAY, WHITE, EGGSHELL, FONT_LG} from '../style-constants.js';

export const Bar = styled.div`
  position: relative;
  border: none;
  border-radius: 50px;
  background-color: ${EGGSHELL};
  width: 50%;
  height: 50px;

  display: flex;
  line-height: 50px;
  text-align: center;
  vertical-align: middle;

  &:hover {
    background-color: ${WHITE}
  }
`;

export const Find = styled.span`
  margin-left: 20px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  border-radius: 50px;
  background-color: ${EGGSHELL};
  height: 35px;
  width: 35px;
  line-height: 35px;
  text-align: center;
  vertical-align: middle;
  padding: 0;

  &:hover {
    background-color: ${WHITE}
  }
`;

export const Input = styled.input`
  border: none;
  background: none;
  margin-left: 10px;
  font-family: ${FONT};
  font-size: ${FONT_LG};
  color: ${GRAY};
  width: 100%;
  padding-right: 30px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: none;
  position: absolute;
  right: 0;
`;