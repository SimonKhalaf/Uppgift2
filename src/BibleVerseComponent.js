import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BibleVerse = styled.div`
  border: 1px solid #2383c4;
  background-color: #2383c4;
`;

const BibleVerseComponent = () => {
  const [verse, setVerse] = useState('');

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await fetch('https://bible-api.com/john 14:6');
        const data = await response.json();
        setVerse(data.text);
      } catch (error) {
        console.error('Error fetching verse:', error);
      }
    };

    fetchVerse();
  }, []);

  return (
    <BibleVerse>
      <h2>Min favorit bibelvers:</h2>
      <p>{verse}</p>
    </BibleVerse>
  );
};

export default BibleVerseComponent;
