module.exports = (sequelize, Sequelize) => {
    const UserDb = sequelize.define("userDb", {
      name: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      }
    });
  
    return UserDb;
  };