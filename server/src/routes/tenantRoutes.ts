import express from "express";
import {
  createTenant,
  getTenant,
  updateTenant,
} from "../controllers/tenantControllers";

const tenantRouter = express.Router();

tenantRouter.get("/:cognitoId", getTenant);
tenantRouter.put("/:cognitoId", updateTenant);
tenantRouter.post("/", createTenant);

export default tenantRouter;
