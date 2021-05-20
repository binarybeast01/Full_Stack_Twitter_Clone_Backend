import  express from "express";
import dotenv from "dotenv";
import { router } from "./auth/routes/router";

dotenv.config()
const port = 8080;
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/",router);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});