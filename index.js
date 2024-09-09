import express from "express"

const app = express() 

app.use(express.json()) // JSON middleware to convert incoming req into json format.

// Starting the server
const PORT = 8080
app.listen(
    PORT,
    () => console.log(`Api is listening at port ${PORT}`)
)

// Method for Handling request on `/api`.
const api_router = (req, res) => {
    const body = req.body
    console.log(body)
    res.status(200).send({
        "data" : "found"
    })
}

// Express have built-in router and since we are on same file in which app is defined, we don't need to define it explicitly.
app.get('/api', api_router)


// Or we can import router from other file and use it directly.
import userRouter from "./userRouter.js"
app.use('/user', userRouter)
