import React, { useState, useCallback } from 'react';
import { useBible } from './BibleContext';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #2980b9;
  }
`;

const ResultContainer = styled.div`
  margin-top: 20px;
`;

const SearchVerses = () => {
  const [verse, setVerse] = useState('');
  const [searchedVerse, setSearchedVerse] = useState('');
  const { addSearchedVerse } = useBible();

  const handleSearch = useCallback(async () => {
    if (!verse) {
      setSearchedVerse('Vänligen ange en vers');
      return;
    }
  
    try {
      const response = await fetch(`https://bible-api.com/${verse}`);
      const data = await response.json();
  
      if (data && data.text) {
        setSearchedVerse(data.text);
      } else {
        setSearchedVerse('Versen kunde inte hittas');
      }
    } catch (error) {
      console.error('Error fetching verse:', error);
      setSearchedVerse('Fel vid hämtning av vers');
    }
  }, [verse]);

  const addToHistory = useCallback(() => {
    // Kontrollera om searchedVerse inte innehåller ett felmeddelande
    if (searchedVerse && !searchedVerse.includes('kunde inte hittas') && !searchedVerse.includes('Fel vid hämtning av vers')) {
      addSearchedVerse(searchedVerse);
    }
  }, [searchedVerse, addSearchedVerse]);

  return (
    <div>
      <h2>Ange en vers:</h2>
      <label>
        <SearchInput
          type="text"
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
          placeholder="ex: Lukas 1:12"
        />
      </label>
      <SearchButton onClick={handleSearch}>Sök</SearchButton>
      {searchedVerse && (
        <ResultContainer>
          {searchedVerse.includes('Vänligen ange en vers') || searchedVerse.includes('Versen kunde inte hittas') ? (
            <p>{searchedVerse}</p>
          ) : (
            <>
              <h3>Versen:</h3>
              <p>{searchedVerse}</p>
              {searchedVerse.includes('Fel vid hämtning av vers') ? null : (
                <SearchButton onClick={addToHistory}>Lägg till i historik
                </SearchButton>
              )}
            </>
          )}
        </ResultContainer>
      )}
    </div>
  );
};

export default SearchVerses;
