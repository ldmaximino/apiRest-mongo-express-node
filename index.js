import "dotenv/config"; //indicamos aquí (en el index.js) la lectura de las variables de entorno para que las reconozca en toda la aplicación.
import "./database/connect.js";
import express from "express";
import authRouter from "./routes/auth_route.js";

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json()); //habilita la lectura de lo enviado a través del req.body

//Defino las rutas que apuntan a la carpeta /routes
app.use("/api/v1", authRouter);

app.listen(PORT, () => console.log(`El servidor está corriendo en http://localhost:${PORT} 🚀🚀🚀🚀`));
