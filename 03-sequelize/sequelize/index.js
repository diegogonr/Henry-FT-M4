const server = require ('./src/app')
const {database} = require('./db')

database.sync({force:true}).then(       //se conecta el servidor despues de conectar a la base de datos
    ()=>{
        server.listen (3002, ()=>{
            console.log("server listening on port 3002")
        })
    }
)


