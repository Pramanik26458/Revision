/* Server ko start karna 
    db se connect karna 
*/
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});

const app=require('./src/app');
const mongoose=require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("db connected");
    })  
}

connectDB();

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});


