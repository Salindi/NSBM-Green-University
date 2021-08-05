const express = require('express');
const app = express();
const cookiesession = require("cookie-session");


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + './views'));


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

 
app.use(cookiesession({
    name:"session",
    maxAge:3600,
    keys:["key"]
}))


app.get("/",require("./middleware/isauth"),(req,res)=>{
    res.render("index")
})

app.use(require("./routes/user.routes"))
app.use(require("./routes/comment.routes"))
app.use(require("./routes/post.routes"))








const PORT = 8080;

app.listen(PORT,function(){
    console.log(`Server started on PORT ${PORT}`)
})