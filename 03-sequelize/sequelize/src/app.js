const express = require ('express');
const server = express();                                         //para ejecutarlo
const morgan = require ('morgan')                                 //middleworks: ionformacion de la request
const {User, Page} = require('../db')


server.use(express.json())                                        // para recibir cosas en formato json
server.use(morgan('dev'))                                         //ver los datos que me llegan, dev: formato de rpta




server.post('/user', async (req, res) => {
    try {
        const {name, lastname, fecha, pages} = req.body

        const newUser = await User.create({
            name ,
            lastname,
            fecha
        })

        await newUser.addPage(pages)

        return res.status(200).json(newUser)

    } catch (error) {
        return res.status(404).send(error.message)
        
    }
})

server.get('/user', async (req, res)=>{
    try {
        const {name} = req.query;

        if (!name){
            const allUsers = await User.findAll({
                attributes: ['name', 'lastname']   //me muestra solo estas props
            } )
            return res.status(200).json(allUsers)
        }
        else{
            const usersByName = await User.findAll({
                where: {
                    name    //que name coincida con los usuarios.name
                }
            })
            return res.status(200).json(usersByName)
        }

    } catch (error) {
        return res.status(404).send(error.message)
    }

})

server.delete ('/user/:id', async(req,res) => {
    try {
        const {id} = req.params
        const userDeleted = await User.findByPk(id);   //busca por la primary key
        userDeleted.destroy();
        return res.status(200).json(userDeleted)


    } catch (error) {
        return res.status(404).send(error.message)
    }

})

server.get ('/user/:id',async(req,res) => {
    try {
        const {id} = req.params
        const user = await User.findByPk(id); 
        if (!user) throw Error('el usuario no existe')

        return res.status(200).json(user)

    } catch (error) {
        return res.status(404).send(error.message)
    }

})

server.post('/user/find', async (req, res) => {
    try {
        const {name, lastname, fecha} = req.body
        const user = await User.findOrCreate({   //si no lo encuentra lo cre
            where: {name},
            defaults: {
                lastname,
                fecha
            }

        }); 

       
        return res.status(200).json(user)

    } catch (error) {
        return res.status(404).send(error.message)
        
    }
})






module.exports = server;


