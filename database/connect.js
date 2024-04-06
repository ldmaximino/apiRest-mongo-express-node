import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Conexión exitosa a la BD 🔥🔥");
} catch (error) {
    console.log(`Error de Conexión a la BD 😒😒 { ERROR : ${error}}`);
}
