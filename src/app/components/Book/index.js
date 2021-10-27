import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import menus from "../../configs/menus";
import "./style.css";

const Book = ({}) => {
	const [name, setName] = useState();
	const [author, setAuthor] = useState();
	const [type, setType] = useState("economy");

	const onChangeText = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		if (name === "name") {
			setName(value);
		} else if (name === "author") {
			setAuthor(value);
		}
	}

	const onSubmit = () => {
		// bookStore.updateBook({
		// 	name: name,
		// 	author: author,
		// 	description: "",
		// 	price: ""
		// }, type)
	}

	const onChangeBookType = (e) => {
		setType(e.target.value)
	}

	const closeModal = () => {
		// bookStore.setOpeningNewBook(false);
	}
	return (
		<div className="book-container">
			<div className="book-header">
				<span className="title">Add New Book Form</span>
				<span className="icon-close" onClick={closeModal}>X</span>
			</div>
			<BookText name="name" label="Book Name" onChangeText={onChangeText} text={name}></BookText>
			<BookText name="author" label="Author" onChangeText={onChangeText} text={author}></BookText>
			<div className="book-field">
				<span className="label">Book Type</span>
				<select className="input-field select" onChange={onChangeBookType}>
					<option disabled hidden value=''></option>
					{
						menus.left.map(item => (
							<option value={item.type}>{item.name}</option>
						))
					}
				</select>
			</div>
			<div className="book-footer">
				<button className="btn btn-primary" onClick={onSubmit}>Subbmit</button>
			</div>
		</div>
	)
}

const BookText = ({ name, label, text, onChangeText }) => (
	<div className="book-field">
		<span className="label">{label}</span>
		<input 
			className="input-field"
			name={name}
			type="text" 
			value={text}
			onChange={onChangeText}
		/>
	</div>
)

export default Book;