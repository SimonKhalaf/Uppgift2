import React from 'react';
import { useBible } from './BibleContext';
import styled from 'styled-components';

const SearchButton = styled.button`
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #2980b9;
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
`;

const HistoryList = () => {
  const { searchedVerses, addFavoriteVerse } = useBible();

  const addToFavorites = (verse) => {
    addFavoriteVerse(verse);
  };

  return (
    <div>
      <h2>Historik av sökta bibelverser:</h2>
      <ul>
        {searchedVerses.map((verse, index) => (
          <StyledListItem key={index}>
            {verse}
            <SearchButton onClick={() => addToFavorites(verse)}>Lägg till i favoriter</SearchButton>
          </StyledListItem>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
