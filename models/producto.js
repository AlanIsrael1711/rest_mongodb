import mongoose, { model } from "mongoose"
const Schema=mongoose.Schema;

mongoose.pluralize(null);
const productoSchema=new Schema({
    nombre:{
        type:String,
        trim:true
    },
    expansion:{
        type:String,
        trim:true
    },
    sobres:{
        type:String,
        trim:true
    },
    
});

const producto=mongoose.model("producto",productoSchema)

export{
    producto
}
