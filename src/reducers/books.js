const initialState = {
  books: [
    {
      id: 1,
      title: "heheh",
    },
  ],
};
const books = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    case "ADD_BOOKS":
      return {
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};
export const setBooks = (books) => {
  return { type: "SET_BOOKS", payload: books };
};
export default books;
