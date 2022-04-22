const mongoose = require("mongoose") ;

module.exports = () => { 
    return mongoose.connect("mongodb+srv://spartans:spartans_123@cluster0.cwmap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority") ;
}