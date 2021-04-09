import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faSearch, faCamera} from '@fortawesome/free-solid-svg-icons';
import {Bar, Find, Button, ButtonWrapper, Input} from './styles_search.js';

function Search(props) {
  return (
    <Bar>
      <Find><FontAwesomeIcon icon={faSearch}/></Find>
      <form>
        <Input type="text" name="query" value="What are you looking for?"/>
      </form>
      <ButtonWrapper>
        <Button><FontAwesomeIcon icon={faCamera} size="lg"/></Button>
      </ButtonWrapper>
    </Bar>
  );
}

export default Search;