// import BooksStore from './BooksStore';

// export const initStore = () => ({
// 	bookStore: new BooksStore()
// })

// let instanceStores = {};
// export const getInstanceStores = () => {
// 	if (!instanceStores) {
// 		// instanceStores = initStore();
// 	}
// 	return instanceStores;
// }
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import BooksSlice from './BooksSlice';
const RootReducer = combineReducers({
	BooksSlice: BooksSlice
})

export default configureStore({
	reducer: RootReducer,
})