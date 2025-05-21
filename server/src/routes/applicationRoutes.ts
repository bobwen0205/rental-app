import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createApplication,
  listApplications,
  updateApplicationStatus,
} from "../controllers/applicationControllers";

const applicationRouter = express.Router();

applicationRouter.post("/", authMiddleware(["tenant"]), createApplication);
applicationRouter.put(
  "/:id/status",
  authMiddleware(["manager"]),
  updateApplicationStatus
);
applicationRouter.get(
  "/",
  authMiddleware(["manager", "tenant"]),
  listApplications
);

export default applicationRouter;
