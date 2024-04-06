import express from "express";
import { login, register } from "../controllers/auth_controller.js";
import { body } from "express-validator";
import { validationResulError } from "../middlewares/validationResultError.js";

const router = express.Router();

router.post("/register", 
    [
        body("email","Formato de EMail no válido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password","La clave debe tener 6 caracteres como mínimo")
            .trim()
            .isLength({ min: 6 }),
        body("password","Formato de password incorrecto")
            .custom((value, {req}) => {
                if(value !== req.body.repassword) {
                    throw new Error("No coinciden las contraseñas")
                }
                return value;
            })
    ],
    validationResulError,
    register);

router.post("/login",
    [
        body("email","Formato de EMail no válido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password","La clave debe tener 6 caracteres como mínimo")
            .trim()
            .isLength({ min: 6 })
    ],
    validationResulError,
    login);

export default router;
