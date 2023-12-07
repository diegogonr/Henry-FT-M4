const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');

const db = new Sequelize(
   'postgres://postgres:123456@localhost:5432/henrydatabase',
   {
      logging: false,
   }
);

modelCharacter(db);
modelAbility(db);
modelRole(db);

const {Character, Ability, Role} = db.models;

Character.hasMany(Ability)
Ability.belongsTo(Character)  //la habilidad pertenece a un personae

Character.belongsToMany(Role, {through: 'Character_Role'}) 
Role.belongsToMany(Character, {through: 'Character_Role'}) 


module.exports = {
   ...db.models,
   db,
   Op,
};
