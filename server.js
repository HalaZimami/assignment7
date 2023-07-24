const express = require('express')
const app = express();
const path = require('path');
const PORT = process.env.port || 3000;
app.use(express.static(path.join(__dirname, 'public')));


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'))
})
app.get('/products', (req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'products.html'))
});
app.get('/services', (req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'services.html'))
});
app.get('/arabica', (req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'arabica.html'))
});
app.get('/excelsa', (req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'excelsa.html'))
});
app.get('/liberica', (req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'liberica.html'))
});
app.get('/robusta', (req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'robusta.html'))
});
app.get('/singleProduct', (req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'singleProduct.html'))
});
app.get('/contactUs', (req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'contactUs.html'))
});
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})