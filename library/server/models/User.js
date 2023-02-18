import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        max: 100,
    },
    street: String,
    city: String,
    ZIP: String,
    phoneNumber: String,
    registrationDate: {
        type: Date,
        required: true,
        default: new Date(),
    },
    NEEC: {
        type: String,
        required: true
    },
    check: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", 'admin', 'superadmin'],
        default: 'admin'
    },
}, { timestamps: true } );

const User = mongoose.model('User', UserSchema);
export default User