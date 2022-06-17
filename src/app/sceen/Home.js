import MainLayout from "../layout"
import { useSelector } from 'react-redux'
import { getBookTypeFromPathName, getBooks } from '../services/helper'
import { booksSelector } from '../stores/BooksSlice'
import "./style.css";
import { Redirect } from "react-router";

const Home = ({ location }) => {
	const type = getBookTypeFromPathName(location.pathname);
 const booksData = 	useSelector(booksSelector);
 const books = getBooks(booksData, type);
	if (!type) {
		return <Redirect to={'/home'}></Redirect>
	}
	return (
		<MainLayout>
			{
				<div className="books-container">
					{
						books.map(book => (
							<div key={book.name} className="book-item">
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