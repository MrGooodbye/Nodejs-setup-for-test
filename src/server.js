import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/webRoutes";
import bodyParser from "body-parser";
import connection from "./config/connectDB";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection();

configViewEngine(app);
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("Project đang chạy tại cổng: ", PORT)
});