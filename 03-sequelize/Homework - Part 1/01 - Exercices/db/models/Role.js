const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Role', {

      name: {
         type: DataTypes.STRING,
         allowNull: false,            //no puede ser nulo
         unique: true,

       },
   
       description: {
           type: DataTypes.STRING,
       },     
     
   });
};
