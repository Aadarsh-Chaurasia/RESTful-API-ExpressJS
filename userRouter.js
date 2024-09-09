import {Router} from "express"

// Express has a built-in router but if we want to use router outside then we'll have to define it explicitly.
const uRouter = Router()

const user = (req, res, next) => {
    const id = req.params.id
    const name = req.body.name

    if (!name) res.status(408).send({message: "Don't you have a name home boy !"})

    res.send({
        details: `Hii ${name}, your id is ${id}`
    })
}


uRouter.post('/:id', user)

export default uRouter