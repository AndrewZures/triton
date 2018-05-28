// import Sequelize, { DataTypes } from 'sequelize';

// const sequelize = new Sequelize({
//     database: 'triton-service-db',
//     username: 'admin',
//     password: 'password1',
//     dialect: 'postgres',
// })

// export const initialize = () => {
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// }

// export const Post = sequelize.define('post', {
//     title: {
//         type: DataTypes.String,
//     },
//     description: {
//         type: Sequelize.Text
//     },
//     createdAt: {
//         type: Sequelize.DATE
//     },
//     updatedAt: {
//         type: Sequelize.DATE
//     },
// });

