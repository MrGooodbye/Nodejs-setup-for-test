'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NHANVIEN extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NHANVIEN.belongsTo(models.KHOAPHONG);
      NHANVIEN.belongsTo(models.NGHENGHIEP);
      NHANVIEN.hasOne(models.HOPDONG);
    }
  };
  NHANVIEN.init({
    tenNhanVien: DataTypes.STRING,
    ngaySinh: DataTypes.DATEONLY,
    diachi: DataTypes.STRING,
    HOPDongId: DataTypes.INTEGER,
    KHOAPHONGId: DataTypes.INTEGER,
    NgheNghiepId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NHANVIEN',
  });
  return NHANVIEN;
};