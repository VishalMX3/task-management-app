import mongoose from "mongoose"

const connectToDatabse = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL)
        if(connection){
            console.log("Connected to Database")
        }
    }catch(error){
        console.log(error)
    }
}

export default connectToDatabse;