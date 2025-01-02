import jwt from "jsonwebtoken";

const staticUsername = "admin";
const staticPassword = "password123";

const login = (req, res) => {
  const { username, password } = req.body;

  if (username === staticUsername && password === staticPassword) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
      expiresIn: "5h",
    });

    return res.json({
      message: "Login successful",
      token,
    });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};

export default login;
