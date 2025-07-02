import bcrypt from "bcrypt";

export const validateAndHashPassword = async (req, res, next) => {
  const { password } = req.body;

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

  if (!password || !regex.test(password)) {
    return res.status(400).json({
      message:
        "La contraseña debe tener entre 8 y 20 caracteres, una mayúscula, una minúscula y un número"
    });
  }

  try {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    req.body.password_hash = hash;
    delete req.body.password;

    // Forzar el rol adopter
    delete req.body.role;
    req.body.role = "adopter";

    next();
  } catch (error) {
    res.status(500).json({ message: "Error al procesar contraseña", error: error.message });
  }
};
