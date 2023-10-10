const {DataTypes} = require('sequelize')


module.exports = (database) =>{
    database.define('User', {               //nombre del modelo, atributos del modelo
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,            //no puede ser nulo
        },

        lastname: {
            type: DataTypes.STRING,
            allowNull: false,            //no puede ser nulo
        },  
        fecha:{
            type:DataTypes.DATEONLY, 
            allowNull: false,
        }    
    },
    
    {
        timestamps:false
    },
    )
}


