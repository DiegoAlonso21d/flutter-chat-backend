/**
 *
 * Path:??
 *
 */

const { Router } = require("express");
const { check } = require("express-validator");
const { crearUsuario, login, renewToken } = require("../controllers/auth-controller");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();

router.post(
  "/new",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Formato incorrecto").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").isLength({ min: 6 }),
    validarCampos,
  ],

  crearUsuario
);

router.post(
  "/",
  [
    check("email", "Formato incorrecto").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").isLength({ min: 6 }),
    validarCampos
  ],
  login
);
//Vlidar JWT
router.get("/renew",validarJWT,renewToken)


module.exports = router;
