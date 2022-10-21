const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


const connectionURL =
"mongodb+srv://sharon:Sharon!21@cluster0.mjs72we.mongodb.net//task-manager-api";
const databaseName ="task-manager";

MongoClient.connect(connectionURL,(Error,client) =>{
    if (Error){
        return console.log("unable to connect to database");
    }
    const db =client.db(databaseName);
    db.collection("users").insertOne(
        {
            name:"drew",
            age:27,
        },
        (error,result)=>{
            if(error){
                return console.log("unable to create user");
            }
            console.log(result);
        }
    );
});