import React from 'react';
import styled from 'styled-components';

function Search(props) {
  return (
    <div>
      <div>
        <span>Magnifying glass</span>
        <form>
          <input type="text" name="query" value="What are you looking for?"/>
        </form>
        <span>Camera icon</span>
      </div>
    </div>
  );
}

export default Search;