import jwt from "jsonwebtoken";

// send token
export const sendToken = async (user: any, res: any) => {
  // Token valid for 120 days — for development use only!
  const accessToken = jwt.sign(
    { id: user.id },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: "120d", // For development only
    }
  );
  res.status(201).json({
    success: true,
    accessToken,
    user,
  });
};
