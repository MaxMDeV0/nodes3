import mongoose from "./index.js";

const materialSchema = mongoose.Schema({
    libelle: String,
    company: String,
    description: String,
    companyDesc: String,
    radar: Map,
})
  

export default mongoose.model('material', materialSchema)