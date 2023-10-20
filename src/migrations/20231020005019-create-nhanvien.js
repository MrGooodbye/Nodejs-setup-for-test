'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NHANVIENs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenNhanVien: {
        type: Sequelize.STRING
      },
      ngaySinh: {
        type: Sequelize.DATEONLY
      },
      diachi: {
        type: Sequelize.STRING
      },
      idHopDong: {
        type: Sequelize.INTEGER
      },
      phongkhoaId: {
        type: Sequelize.INTEGER
      },
      idNgheNghiep: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('NHANVIENs');
  }
};