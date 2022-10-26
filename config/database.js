// Import du module mongoose
const mongoose = require('mongoose');

// Connexion mongoose
const mongoDB = process.env.MONGO_URL || null;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Connexion par défault
var db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'MongoDB connection error:'));