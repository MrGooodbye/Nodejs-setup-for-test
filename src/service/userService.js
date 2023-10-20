//khi dùng seeder để tạo data mẫu thì gọi tên migration không phải gọi tên modal
import { Op } from 'sequelize';
import db from '../models/index';

const getDateToday = () => {
    let today = new Date()
    let formatToday = today.toISOString().split('T')[0];
    return formatToday;
}

const formartDate = (date) => {
    let defaultDate = new Date(date);
    let dateToFormart = defaultDate.toISOString().split('T')[0];
    return dateToFormart;
}

const getListDepartment = async () => {
    try {
        let listDepartment = await db.KHOAPHONG.findAll({
            attributes: ["tenKhoaPhong"],
            include: { model: db.NHANVIEN, attributes: ["tenNhanVien"] },
            order: [["id", "DESC"]],
            nest: true,
            raw: true
        })

        let arrayDepartment = [];

        listDepartment.forEach((item) => {
            arrayDepartment.push({
                tenKhoaPhong: item.tenKhoaPhong,
                tenNhanVien: item.NHANVIEN.tenNhanVien
            })
        })

        return arrayDepartment;

    } catch (error) {
        console.log(error)
    }
}

const getContractEndToday = async () => {
    const today = getDateToday();
    try {
        const listContractEndToday = await db.HOPDONG.findAll({
            attributes: ["ngayvaolam", "ngayketthuc"],
            where: { ngayketthuc: { [Op.lte]: today } },
            include: [{ model: db.NHANVIEN, attributes: ["tenNhanVien"] }],
            raw: true
        })
        return listContractEndToday;
    } catch (error) {
        console.log(error);
    }
}

const getListUser = async () => {
    try {
        let listUser = await db.NHANVIEN.findAll({
            attributes: ["tenNhanVien", "ngaySinh", "diachi"],
            include: [{ model: db.KHOAPHONG, attributes: ["tenKhoaPhong"] }, { model: db.NGHENGHIEP, attributes: ["tenNgheNghiep"] }, { model: db.HOPDONG, attributes: ["ngayvaolam", "ngayketthuc"] }],
            raw: true
        })
        console.log(listUser);
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (data) => {
    try {
        await db.nhanvien.create({
            fullName: data.fullName,
            DOB: data.userDOB,
            phone: data.userPhone,
            email: data.userEmail
        })
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (userId) => {
    try {
        let dataUser = await db.nhanvien.findAll({
            where: {
                id: userId,
            },
        })
        return dataUser;
    } catch (error) {
        console.log(error)
    }
}

const updateUserById = async (data) => {
    try {
        await db.nhanvien.update({
            fullName: data.fullName,
            DOB: data.userDOB,
            phone: data.userPhone,
            email: data.userEmail
        },
            {
                where: {
                    id: data.userId
                }
            })
    } catch (error) {
        console.log(error)
    }
}

const deleteUserById = async (data) => {
    try {
        await db.nhanvien.destroy({
            where: {
                id: data
            }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getContractEndToday, getListDepartment,
    getListUser, createUser, getUserById, updateUserById, deleteUserById
}