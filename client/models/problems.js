const mongoose =require('mongoose');
const problems=new mongoose.Schema({
    name:{
        type: String,
        required:[true,'problemname is must'],
        trim: true,
    },
    topic:{
        type: String,
        required:[true,'problemname is must'],
        trim: true,
    },
    url:{
        type: String,
        required:[true,'url is must'],
        trim: true,
    },
    firattempted:{
        type: Boolean,
        default: false,
    },
    important:{
        type: Boolean,
        default: false,
    },  
    solved:{
        type: Boolean,
        default: false,
    },    
    secattempt:{
        type: Boolean,
        default: false,
    },      

})
module.exports=mongoose.model('Problem',problems)