require('dotenv').config();
const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('Connected to DB');
    } catch (error) {
        throw error;
    }
};

module.exports = connectToDb;
