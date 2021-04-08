import styled from 'styled-components';
import {FONT, GRAY, WHITE, EGGSHELL, FONT_MED, FONT_LG} from '../style-constants.js';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  padding: 0 1.875rem;
  padding-top: 50px;
  padding-bottom: 25px;

  font-family: ${FONT};
  color: ${GRAY};
  font-size: ${FONT_MED};
  line-height: 175%;

  background-color: ${EGGSHELL};
`;

export const Announce = styled.h1`
  font-size: 1.5rem;
  color: black;
  line-height: 150%;
`;

export const Header = styled.h1`
  font-weight: 700;
  font-size: ${FONT_MED};
  color: black;
`;

export const Section = styled.div`
  padding-bottom: 1.875rem;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ListWrapper = styled.li`
  width: 25%;
  margin-bottom: .75rem;
  margin-right: 1.5rem;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin-bottom: .75rem;
  list-style-type: none;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${GRAY};

  &:visited {
    color: ${GRAY};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Join = styled.div`
  width: 25%;
  margin-bottom: 4rem;
`;

export const AllLinks = styled.ul`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 50px;
  background-color: black;
  color: ${EGGSHELL};
  font-weight: 700;

  &:hover {
    background-color: #333;
  }
`;