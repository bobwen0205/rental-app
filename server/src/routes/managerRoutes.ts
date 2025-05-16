import express from "express";
import {
  getManager,
  createManager,
  updateManager,
  getManagerProperties,
} from "../controllers/managerControllers";

const managerRouter = express.Router();

managerRouter.get("/:cognitoId", getManager);
managerRouter.put("/:cognitoId", updateManager);
managerRouter.get("/:cognitoId/properties", getManagerProperties);
managerRouter.post("/", createManager);

export default managerRouter;
