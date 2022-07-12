const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/BooksController');

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);
router.post('/', BooksController.createBook);
router.put('/:id', BooksController.updateBook);
router.delete('/:id', BooksController.deleteBook);

module.exports = router;