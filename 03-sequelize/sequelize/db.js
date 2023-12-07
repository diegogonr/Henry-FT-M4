
const {Sequelize, DataTypes} = require ('sequelize');
const UserModel =  require ('./src/models/User')
const PosteosModel =  require ('./src/models/Post')
const PageModel =  require ('./src/models/Page')

const database = new Sequelize(`postgres://postgres:123456@localhost:5432/demosequelize`, {
    logging:false});   //instanciar la db

//*PRESENTAMOS A LOS MODELOS 
UserModel(database);                    
PosteosModel(database);
PageModel(database);

const {User, Post, Page} = database.models;


//???????????? RELACIONES DE TABLAS
User.hasMany(Post);    //un usuario puede tener muchos posteos
Post.belongsTo(User);   //un post pertenece un user

//*TABLA INTERMEDIA
User.belongsToMany(Page,{through: 'UserPage'} ); //un usuario puede tener muchas paginas; through es la tabla intermedia
Page.belongsToMany(User,{through: 'UserPage'} ); //una pagina puede tener muchos usuarios; through es la tabla intermedia

module.exports = {database, ...database.models}  //enviar database y los modelos





