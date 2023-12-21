import { createContext, useContext, useReducer } from 'react';

const BibleContext = createContext();

const initialState = {
  searchedVerses: [],
  favoriteVerses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SEARCHED_VERSE':
      return { ...state, searchedVerses: [...state.searchedVerses, action.payload] };
    case 'ADD_FAVORITE_VERSE':
      return { ...state, favoriteVerses: [...state.favoriteVerses, action.payload] };
    case 'REMOVE_FAVORITE_VERSE':
      return {
        ...state,
        favoriteVerses: state.favoriteVerses.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export const BibleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addSearchedVerse = (verse) => {
    dispatch({ type: 'ADD_SEARCHED_VERSE', payload: verse });
  };

  const addFavoriteVerse = (verse) => {
    dispatch({ type: 'ADD_FAVORITE_VERSE', payload: verse });
  };

  const removeFavoriteVerse = (verse) => {
    dispatch({ type: 'REMOVE_FAVORITE_VERSE', payload: verse });
  };

  return (
    <BibleContext.Provider
      value={{
        searchedVerses: state.searchedVerses,
        addSearchedVerse,
        favoriteVerses: state.favoriteVerses,
        addFavoriteVerse,
        removeFavoriteVerse,
      }}
    >
      {children}
    </BibleContext.Provider>
  );
};

export const useBible = () => {
  const context = useContext(BibleContext);

  if (!context) {
    throw new Error('useBible must be used within a BibleProvider');
  }

  return context;
};
