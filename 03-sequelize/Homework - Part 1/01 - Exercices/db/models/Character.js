const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {

      
      code: {
         primaryKey: true,
         type: DataTypes.INTEGER,
         allowNull: false,            //no puede ser nulo
         validate: {
            len: [1, 5], 
            is(value) {
   
               if (value == "HENRY" || value == "henry" ) {
                 throw new Error(`no tiene que ser igual a HENRY`);
               }
             },
          },
         },
      name: {
         type: DataTypes.STRING,
         allowNull: false,            //no puede ser nulo
         unique: true,
         validate: {
            is(value) {
   
              if (value == "Henry" || value == "SoyHenry" ) {
                throw new Error(`no tiene que ser igual a henry, ni soyhenry`);
              }
            },
          }
      },
      race: {
         type: DataTypes.STRING,
         defaultValue: 'other'
      },

      age: {
         type: DataTypes.INTEGER,
      },
      
      hp: {
         type: DataTypes.FLOAT,
         allowNull: false,            //no puede ser nulo
      },
      mana: {
         type: DataTypes.FLOAT,
         allowNull: false,            //no puede ser nulo
      },      
   } , 
      {
         timestamps:false
      },

   );
};
