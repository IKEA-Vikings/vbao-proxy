import styled from 'styled-components';
import {FONT, GRAY, WHITE, EGGSHELL, FONT_MED, FONT_LG} from '../style-constants.js';

export const Bar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 2px;
  border-bottom: 1px solid ${EGGSHELL};

  font-family: ${FONT};
`;

export const Logo = styled.h1`
  font-size: 2rem;
`;