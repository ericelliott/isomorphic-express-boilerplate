import { routeReducer } from 'redux-simple-router';

const initialBookState = [
  { id: 1, text: 'Book 1', count: 2 },
  { id: 2, text: 'Book 2', count: 3 },
  { id: 3, text: 'Book 3', count: 4 },
];

const initialNavState = {
  brand: 'Brand'
};

const initialTitleState = 'Page Title';

const nav = (state =
  initialNavState
) => {
  return state;
};

const title = (state =
  initialTitleState
) => {
  return state;
};

const books = (state = {
  items: initialBookState,
}, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      const newItems = state.items.map(item => {
        if (item.id === action.item.id) {
          item.count++;
        }

        return item;
      });

      return Object.assign({}, state.items, {
        items: newItems,
      });
    default:
    return state;
  }
};

const reducers = {
  routing: routeReducer,
  nav,
  title,
  books,
};

export default reducers;
