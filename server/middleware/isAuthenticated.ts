import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../utils/prisma";

export const isAuthenticated = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: "Please Log in to access this content",
      });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Token missing",
      });
    }

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!,
      async (err: any, decoded: any) => {
        if (err) {
          return res.status(401).json({
            message: "Token is invalid",
          });
        }
        const userData = await prisma.user.findUnique({
          where: {
            id: decoded.id,
          },
        });

        req.user = userData;
        next();
      }
    );
  } catch (error) {
    console.log("error", error);
  }
};

export const isAuthenticatedDriver = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: "Please Log in to access this content",
      });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Token missing",
      });
    }

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!,
      async (err: any, decoded: any) => {
        if (err) {
          return res.status(401).json({
            message: "Token is invalid",
          });
        }
        const driverData = await prisma.driver.findUnique({
          where: {
            id: decoded.id,
          },
        });

        req.driver = driverData;
        next();
      }
    );
  } catch (error) {
    console.log("error", error);
  }
};
