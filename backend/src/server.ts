import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";

dotenv.config()

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(router);


app.listen(PORT, () =>{
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});

