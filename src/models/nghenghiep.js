'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NGHENGHIEP extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NGHENGHIEP.hasOne(models.NHANVIEN);
    }
  };
  NGHENGHIEP.init({
    tenNgheNghiep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NGHENGHIEP',
  });
  return NGHENGHIEP;
};