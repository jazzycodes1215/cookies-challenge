const express = require("express")
const cookieParser = require("cookie-parser")

const app = express();
app.use(cookieParser())

const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login', (req, res) => {

    const opts = {
        maxAge: 900000,
        httpOnly: true,
        sameSite: 'strict',
      };

    res.cookie("user", "name", opts)
    res.send(`Hello ${req.cookies.user}`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))