import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faSearch, faCamera} from '@fortawesome/free-solid-svg-icons';
import {Form, Bar} from './styles_search.js';

function Search(props) {
  return (
    <div>
      <span><FontAwesomeIcon icon={faSearch} size="lg"/></span>
      <Form>
        <Bar type="text" name="query" value="What are you looking for?"/>
      </Form>
      <button><FontAwesomeIcon icon={faCamera} size="lg"/></button>
    </div>
  );
}

export default Search;