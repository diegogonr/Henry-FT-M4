const {DataTypes} = require('sequelize')


module.exports = (database) =>{
    //*SQUELIZE POR DETRAS HACE POR DETRAS SQL PURO
    database.define('Post', {               //nombre del modelo, atributos del modelo
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        
        title: {
            type: DataTypes.STRING,
            allowNull: false            //no puede ser nulo

        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false          //no puede ser nulo
        }
    })
}


