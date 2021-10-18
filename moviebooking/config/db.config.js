const mongoClient = require('mangodb').mongoClient;
const dbUrl = "mangodb://localhost:27017";

const mongoObj = new mongoClient(dbUrl,{
    useUnifiedTopology :true,
    useNewUrlParser : true,
    useFindAndModify : false
});

mongoObj.connect((err,dbInfo)=>{
    if(err) { console.log(err); return;}
    var db = Client.db('moviesdb');
    console.log('Database Created!!');
})