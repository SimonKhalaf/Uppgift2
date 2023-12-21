import BibleVerseComponent from './BibleVerseComponent';
import SearchVerses from './SearchVerses';
import RandomVerse from './RandomVerse';
import HistoryList from './HistoryList';
import FavoriteVerses from './FavoriteVerses';
import { BibleProvider } from './BibleContext';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 60%;
  border: 1px solid black;
  margin: 20px auto;
  background-color: #d0ecf9;
  text-align: center;
`;

const Titel = styled.div`
  padding: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #167cab; 

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #63c0eb;
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #5cbdea;
`;


function App() {
  return (
    <AppContainer>
      <Titel>
      <h1>Välkommen till Bible - API!</h1>
      <p>På denna sidan hittar du en bibelvers som står mig nära hjärtat, ett inputfält där du kan söka på en bibelvers som sedan visas (Finns inte versen dyker meddelandet "Versen kunde inte hittas" upp). Därefter kan du markera den så att den hamnar bland din historik. Du kan därefter markera den som din favorit och alltid ha dina favoritverser sparade! Varje gång sidan refreshas så dyker ett nytt bibelcitat från Matteusevangeliet upp.</p>
      </Titel>
      
      <BibleProvider>
      <BibleVerseComponent />

      <FlexContainer>
        <LeftColumn>
      <SearchVerses />
        </LeftColumn>
        <RightColumn>
      <HistoryList />
      </RightColumn>
      </FlexContainer>

      <FavoriteVerses />
      </BibleProvider>
      <RandomVerse />
    </AppContainer>
  );
}

export default App;
