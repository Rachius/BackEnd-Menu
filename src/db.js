import mongoose from 'mongoose'

export const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://juanpablo785:mQEpdf96lLx5i02n@cluster0.bprsjzh.mongodb.net/?retryWrites=true&w=majority")
        console.log(">>> DB is connected")
    
    } catch(error) {
        console.log(error)
    }

}

