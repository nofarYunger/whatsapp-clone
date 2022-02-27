module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define("Chat", {
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Chat;
};
