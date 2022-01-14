require("dotenv").config()


const mongoose = require("mongoose")

// const mongoDB = 'mongodb+srv://Javi:metal1988*@cluster0.alosw.mongodb.net/local_library?retryWrites=true&w=majority'

// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Base de datos en cluster ONLINE");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la BBDD");
    }
};

dbConnection()