const {DataTypes} = require('sequelize')


module.exports = (database) =>{
    database.define('Page', {               //nombre del modelo, atributos del modelo
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        page_name: {
            type: DataTypes.STRING,
            allowNull: false,            //no puede ser nulo
        }
    },
    
    {
        timestamps:false
    },
    )
}


