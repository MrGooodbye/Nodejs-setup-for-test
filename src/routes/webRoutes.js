import express from "express";
import userController from "../controller/userController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", userController.handleHomePage);
    router.post("/user/create/user", userController.handleCreateUser);
    router.get("/user/read/userid=:userId", userController.handleGetUserById); //truyền tham số qua link chỉ cần dùng :tham số
    router.post("/user/update/userid=:userId", userController.handleUpdateUserById);
    router.post("/user/delete/userid=:userId", userController.handleDeleteUserById);

    router.get("/user/read/getContractEnd", userController.getContractEndToday);
    router.get("/user/read/download/getDepartment", userController.getListDepartment);
    return app.use("/", router);
}

export default initWebRoutes;