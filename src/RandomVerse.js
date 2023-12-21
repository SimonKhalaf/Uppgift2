import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';


const Matteus = styled.div`
  padding: 20px;
`;

const RandomVerse = () => {
  const [verse, setVerse] = useState('');

  const fetchRandomVerse = useMemo(() => async () => {
    try {
      const book = 'Matthew';
      const chapter = Math.floor(Math.random() * 28) + 1; // Slumpmässigt kapitel mellan 1 och 28 (Matthew har 28 kapitel)
      const verseNumber = Math.floor(Math.random() * 25) + 1; // Slumpmässig vers mellan 1 och 25 (för demonstrationens skull)

      const url = `https://bible-api.com/${book}${chapter}:${verseNumber}`;

      const response = await fetch(url);
      const data = await response.json();
      setVerse(data.text);
    } catch (error) {
      console.error('Error fetching random Matthew verse:', error);
    }
  }, []);

  useEffect(() => {
    fetchRandomVerse();
  }, [fetchRandomVerse]);

  return (
    <Matteus>
      <h2>Slumpmässig bibelvers från Matteusevangeliet:</h2>
      <p>{verse}</p>
    </Matteus>
  );
};

export default RandomVerse;
