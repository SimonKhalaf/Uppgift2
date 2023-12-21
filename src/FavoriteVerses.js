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

const FavoriteVerses = () => {
  const { favoriteVerses, removeFavoriteVerse } = useBible();

  const handleRemoveFavorite = (verse) => {
    removeFavoriteVerse(verse);
  };

  return (
    <div>
      <h2>Dina favorit bibelverser:</h2>
      <ul>
        {favoriteVerses.map((fav, index) => (
          <StyledListItem key={index}>
            {fav}
            <SearchButton onClick={() => handleRemoveFavorite(fav)}>Radera</SearchButton>
          </StyledListItem>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteVerses;
