const express =  require('express');
const mongoose =  require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/products.route.js")
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res)=>{
    res.send("Hello from Node API updated")
});


mongoose.connect("mongodb+srv://admin:TCR7lPaqiG8UdNFW@backenddb.x2rzi6d.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connect to database");
    app.listen(3000, () =>{
        console.log('server is running on port 3000')
    });
})
.catch(()=>{
    console.log("Connection failed")
});