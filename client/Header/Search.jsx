import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faSearch, faCamera} from '@fortawesome/free-solid-svg-icons';

function Search(props) {
  return (
    <div>
      <span><FontAwesomeIcon icon={faSearch} size="lg"/></span>
      <form>
        <input type="text" name="query" value="What are you looking for?"/>
      </form>
      <button><FontAwesomeIcon icon={faCamera} size="lg"/></button>
    </div>
  );
}

export default Search;