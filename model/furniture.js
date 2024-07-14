import mongoose from "./index.js";


const furnitureSchema = mongoose.Schema({
    name: String,
    description: String,
    materials: Map,
    stock: Number,
    category:String,
})
  

export default mongoose.model('furniture', furnitureSchema)