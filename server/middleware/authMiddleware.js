import User from "../models/User.js";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
  // const { userId } = req.auth;
  const authHeader = req.header('Authorization')
  const userId = authHeader.split(" ")[1]
  console.log("User ID:", userId);
  if (!userId) {
    res.json({ success: false, message: "not authenticated" });
  } else {
    const user = await User.findById(userId);
    req.user = user;
    next();
  }
};