import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getLeasePayments, getLeases } from "../controllers/leaseControllers";

const leaseRouter = express.Router();

leaseRouter.get("/", authMiddleware(["manager", "tenant"]), getLeases);
leaseRouter.get(
  "/:id/payments",
  authMiddleware(["manager", "tenant"]),
  getLeasePayments
);

export default leaseRouter;
