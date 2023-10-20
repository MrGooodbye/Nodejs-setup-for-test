'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HOPDONG extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HOPDONG.hasOne(models.NHANVIEN);
    }
  };
  HOPDONG.init({
    ngayvaolam: DataTypes.DATEONLY,
    ngayketthuc: DataTypes.DATEONLY,
    NhanVienId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HOPDONG',
  });
  return HOPDONG;
};