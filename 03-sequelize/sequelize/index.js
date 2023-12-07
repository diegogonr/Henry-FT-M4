const server = require ('./src/app')        //el servidor
const {database} = require('./db')          //la base de datos

database.sync({force:true}).then(       //se conecta el servidor despues de conectar a la base de datos
    ()=>{
        server.listen (3002, ()=>{          //levanta el servidor
            console.log("server listening on port 3002")
        })
    }
)


