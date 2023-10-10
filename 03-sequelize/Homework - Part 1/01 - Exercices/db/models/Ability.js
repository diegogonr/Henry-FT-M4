const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,            //no puede ser nulo
      // unique: 'compositeIndex',        //tambien controla que sea unico la suma de mana y name

    },

    description: {
        type: DataTypes.STRING,
    },     
    mana_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,            //no puede ser nulo
      validate: {
        isBetweenTwoValues(value) {
          const minValue = 10.0; 
          const maxValue = 250.0; 

          if (value < minValue || value > maxValue) {
            throw new Error(`mana_cost debe estar entre ${minValue} y ${maxValue}`);
          }
        },
      },
      // unique: 'compositeIndex',
   },
  },
   {
    indexes: [
      {
        unique: true,
        fields: ['name', 'mana_cost'],
        name: 'compositeIndex',
      },
    ],
  }
  );
};