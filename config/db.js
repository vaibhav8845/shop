// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/momoOrderDB', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');
const dbHOST = process.env.DBHOST;

mongoose.connect(dbHOST)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while Mongo Conn..', err);
    })