import mongoose, {Schema} from "mongoose"

const categorySchema = ({
    
    country:{
        type: String
    },
    category:{
        type: String
    },
  
})


export const Category = mongoose.model("Category", categorySchema )