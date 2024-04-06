import { validationResult } from "express-validator";

export const register = (req,res) => {
    return res.json({ok: "register"});
}

export const login = (req,res) => {
    return res.json({ok: "login"});
}
