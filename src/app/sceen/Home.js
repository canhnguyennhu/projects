import MainLayout from "../layout"
import { useDispatch, useSelector } from 'react-redux'
import { getBookTypeFromPathName } from '../services/helper'
import { allBooksSelector, booksSelector } from '../stores/BooksSlice'
import "./style.css";

const Home = ({ location }) => {
	const type = getBookTypeFromPathName(location.pathname);
	// const books = !type || type === "home" 
	// 	? bookStore.fetchAll
	// 	: bookStore.books[type];
	const books = useSelector(allBooksSelector);
	console.log(books);
	return (
		<MainLayout>
			{
				<div className="books-container">
					{
						books.map(book => (
							<div className="book-item">
								<div className="book-icon"/>
								<div className="book-name">{book.name}</div>
								<div className="book-author">by {book.author}</div>
							</div>
						))
					}
				</div>
			}
		</MainLayout>
	)
}

export default Home;