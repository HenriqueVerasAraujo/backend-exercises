const BooksService = require('../services/BooksService');

const getAll = async(_req, res) => {
    try {
        const allBooks = await BooksService.getAll();
        return res.status(200).json(allBooks);
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

const createBook = async(req, res) => {
    try {
        const newBook = await BooksService.createBook(req.body);
        return res.status(201).json(newBook);
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

const getById = async(req, res) => {
    try {
        const { id } = req.params;
        const singleBook = await BooksService.getById(id);
        if(singleBook.error) {
            return res.status(404).json({message: singleBook.error });
        }
        return res.status(200).json(singleBook);
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

const updateBook = async(req, res) => {
    try {
        const fields = req.body
        const { id } = req.params;
        const singleBook = await BooksService.updateBook(id, fields);
        if(singleBook.error) {
            return res.status(404).json({message: singleBook.error });
        }
        return res.status(200).json({message: 'Book updated!'});
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

const deleteBook = async(req, res) => {
    try {
        const { id } = req.params;
        const singleBook = await BooksService.deleteBook(id);
        if(singleBook.error) {
            return res.status(404).json({message: singleBook.error });
        }
        return res.status(200).json({ message: singleBook.message });
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err});
    }
};

module.exports = {
    getAll,
    createBook,
    getById,
    updateBook,
    deleteBook,
};