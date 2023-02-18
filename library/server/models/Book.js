import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        max: 100,
    },
    description: String,
    price: Number,
    rating: Number,
    supply: Number,
    ISBN: {
        type: String,
        required: true,
        unique: true,
    },
    NBFree: {
        type: Number,
        required: true
    },
    category: ['Classics', 'Adventure stories', 'Fairy tales', 'Fantasy', 'Horror', 'Mystery', 'War', 'Young adult', 'Crime'],
    counter: {
        type: Number,
    },
}, { timestamps: true } );

const Book = mongoose.model('Book', BookSchema);
export default Book