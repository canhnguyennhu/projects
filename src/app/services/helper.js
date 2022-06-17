
export const getBookTypeFromPathName = (pathname) =>{
	return pathname.split('/')[1];
}

export const getBooks = (books, type) => {
	const fetchArr = [];
	if (type !== "home") {
		fetchArr.push(...books[type])
		return fetchArr
	}
	for (let key in books) {
		fetchArr.push(...books[key])
	}
	return fetchArr;
}