
const {Sequelize, DataTypes} = require ('sequelize');
const UserModel =  require ('./src/models/User')
const PosteosModel =  require ('./src/models/Post')
const PageModel =  require ('./src/models/Page')

const database = new Sequelize(`postgres://postgres:123456@localhost:5432/demosequelize`, {logging:false});   //instanciar la db

UserModel(database);
PosteosModel(database);
PageModel(database);

const {User, Post, Page} = database.models;


//???????????? RELACIONES DE TABLAS
User.hasMany(Post);    //un usuario puede tener muchos posteos
Post.belongsTo(User);   //un post pertenece un user

//*TABLA INTERMEDIA
User.belongsToMany(Page,{through: 'UserPage'} ); 
Page.belongsToMany(User,{through: 'UserPage'} ); 

module.exports = {database, ...database.models}





