import mongoose from 'mongoose' 

const connectDB  = handler => async (req,res) => {

    // allready connecting databasase
    if(mongoose.connection.readyState ) {
        return handler(req,res);
    }else{
    // not connect database is connect 
    await mongoose.connect(process.env.Mongo_URL);
    return handler(req,res);
    }
}
export default connectDB;