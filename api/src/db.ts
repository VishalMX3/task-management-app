import mongoose from "mongoose"

const connectToDatabse = async () => {
    try{
        const connection = await mongoose.connect("mongodb+srv://admin-vishal:Test123@cluster0.jtdoo3s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        if(connection){
            console.log("Connected to Database")
        }
    }catch(error){
        console.log(error)
    }
}

export default connectToDatabse;