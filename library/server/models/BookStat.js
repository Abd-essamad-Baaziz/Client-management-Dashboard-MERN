import mongoose from 'mongoose';

const BookStatSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true,
    },
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number,
        }
    ],
    dailyData: {
        date: String,
        totalSales: Number,
        totalUnits: Number,
    }
}, { timestamps: true } );

const BookStat = mongoose.model('BookStat', BookStatSchema);
export default BookStat