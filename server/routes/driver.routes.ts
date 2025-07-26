import express from "express";
import {
  verifyingEmailOtp,
  sendingOtpToPhone,
  getLoggedInDriverData,
  verifyPhoneOtpForLogin,
  verifyPhoneOtpForRegistration,
  updateDriverStatus,
  getDriversById,
} from "../controllers/driver.controller";
import { isAuthenticatedDriver } from "../middleware/isAuthenticated";

const driverRouter = express.Router();

driverRouter.post("/send-otp", sendingOtpToPhone);

driverRouter.post("/login", verifyPhoneOtpForLogin);

driverRouter.post("/verify-otp", verifyPhoneOtpForRegistration);

driverRouter.get("/get-drivers-data", getDriversById);

driverRouter.post("/registration-driver", verifyingEmailOtp);

driverRouter.get("/me", isAuthenticatedDriver, getLoggedInDriverData);

driverRouter.put("/update-status", isAuthenticatedDriver, updateDriverStatus);

export default driverRouter;
