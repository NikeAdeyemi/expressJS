const express = require("express")
const fs = require('fs')
const app = express()
const port = 8989
const productRoute = require('./routes/productRoute')


const homePage = fs.readFileSync('./pages/home.html', 'utf-8')

// const aboutPage = fs.readFileSync('./pages/about.html', 'utf-8' )
// const contactPage = fs.readFileSync('./pages/contact.html', 'utf-8')
// const productPage = fs.readFileSync('./pages/product.html', 'utf-8')
// const testimonialPage = fs.readFileSync('./pages/testimonial.html', 'utf-8')

app.get('/', (req,res) => {
    res.send(homePage)
})

// app.get('/about', (req,res) => {
//     res.send(aboutPage)
// })

// app.get('/contact', (req,res) => {
//     res.send(contactPage)
// })

// app.get('/product', (req,res) => {
//     res.send(productPage)
// })

// app.get('/testimonial', (req,res) => {
//     res.send(testimonialPage)
// })


//Using productRoute
app.use(productRoute)
//server will now handle json data
app.use(express.json())


app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})