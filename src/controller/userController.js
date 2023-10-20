import userService from '../service/userService'
import excel from "exceljs";

const handleHomePage = async (req, res) => {
    let data = await userService.getListUser();
    return res.render("home", { data });
}

const handleCreateUser = async (req, res) => {
    await userService.createUser(req.body);
    return res.redirect("/");
}

const handleGetUserById = async (req, res) => {
    let dataUser = await userService.getUserById(req.params.userId);
    return res.render("update", { dataUser });
}

const handleUpdateUserById = async (req, res) => {
    await userService.updateUserById(req.body);
    return res.redirect("/");
}

const handleDeleteUserById = async (req, res) => {
    await userService.deleteUserById(req.params.userId);
    return res.redirect("/");
}

const getContractEndToday = async (req, res) => {
    let contractEnd = await userService.getContractEndToday();
    console.log(contractEnd);
}

const getListDepartment = async (req, res) => {
    let arrayDepartment = await userService.getListDepartment();

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("Danh sách phòng khoa");

    worksheet.columns = [
        { header: "Tên nhân viên", key: "tenNhanVien", width: 25 },
        { header: "Khoa phòng", key: "tenKhoaPhong", width: 25 },
    ];

    // Add Array Rows
    worksheet.addRows(arrayDepartment);

    res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
        "Content-Disposition",
        "attachment; filename=" + "Danh sách phòng khoa.xlsx"
    );

    return workbook.xlsx.write(res).then(function () {
        res.status(200).end();
    });
}

module.exports = {
    handleHomePage, handleCreateUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById, getListDepartment, getContractEndToday
}