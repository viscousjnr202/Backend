const mongoose = require('mongoose');

const db = async (url) =>{
    await mongoose.connect(url)
    .then(result => console.log(`Database is connected succesfully`))
    .catch(err => console.log(err))
}

module.exports = db;