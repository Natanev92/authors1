const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO AUTHORS1 DB"))
    .catch(err => console.log("ERROR: "+err));