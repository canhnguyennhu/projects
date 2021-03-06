import { createSlice } from "@reduxjs/toolkit";
import data from "./dummy/data";
export const initialState = {
  books: data,
	openingNewBook: false,
}


export const BooksSlice = createSlice({
	name: "BooksSlice",
	initialState,

	reducers: {
		setOpeningNewBook: (state, { payload }) => {
			state.openingNewBook = payload;
		},
		updateBook: (state, { payload }) => {
			const { book, type } = payload;
			state.books[type] && state.books[type].push(book);
		}
	}
})

export const { updateBook, setOpeningNewBook } = BooksSlice.actions;
export const booksSelector = state => state.BooksSlice.books;
export const openingNewBookSelector = state => state.BooksSlice.openingNewBook;
export const allBooksSelector = state => {
	const fetchArr = [];
		for (let key in state.BooksSlice.books) {
			fetchArr.push(...state.BooksSlice.books[key])
		}
		return fetchArr;
}


export default BooksSlice.reducer;