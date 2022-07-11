const { Book } = require('../models');

const getAll = async () => {
    const allBooks = await Book.findAll();
    return allBooks;
}

const createBook = async (body) => {
    const {title, author, pageQuantity} = body;
    const newBook = await Book.create({ title, author, pageQuantity })
    return newBook;
}

const getById = async (id) => {
    const singleBook = await Book.findOne({ where: { id } });
    if (!singleBook) {
        return {error: 'Book not found.'}
    }
    return singleBook;
};

const updateBook= async (id, fields) => {
    const singleBook = await Book.findOne({ where: { id } });
    if (!singleBook) {
        return {error: 'Book not found.'}
    }
    const updateBook = await Book.update(fields, { where: { id } });
    return updateBook;
};

module.exports = {
    getAll,
    createBook,
    getById,
    updateBook,
}