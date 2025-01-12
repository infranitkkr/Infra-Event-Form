const mongoose = require('mongoose');
require('dotenv').config();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };


  dbURI = process.env.MONGODB_URI
  mongoose.connect(dbURI, options)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Export the connection
module.exports = mongoose;
