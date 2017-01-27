module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Burgers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.Boolean,
      defaultValue: false
    }
  });
  return Burgers;
};
