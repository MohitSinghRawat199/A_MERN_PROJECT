import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    // 1. Get token from cookies
    const token = req.cookies?.token;

    // 2. If token not present
    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach user id to request
    req.userId = decoded.userId;

    // 5. Continue
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized - invalid or expired token",
    });
  }
};

export default isAuth;
