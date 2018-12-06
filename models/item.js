module.exports = function (sequelize, DataTypes) {
  let Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    noOfMale: DataTypes.INTEGER,
    noOfFemale: DataTypes.INTEGER
  })
  
  return Item
}
