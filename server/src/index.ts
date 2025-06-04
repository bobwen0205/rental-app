import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { authMiddleware } from "./middleware/authMiddleware";
import tenantRouter from "./routes/tenantRoutes";
import managerRouter from "./routes/managerRoutes";
import propertyRouter from "./routes/propertyRoutes";
import leaseRouter from "./routes/leaseRoutes";
import applicationRouter from "./routes/applicationRoutes";
import connectCloudinary from "./configs/cloudinary";

dotenv.config();
const app = express();
connectCloudinary();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/tenants", authMiddleware(["tenant"]), tenantRouter);
app.use("/managers", authMiddleware(["manager"]), managerRouter);
app.use("/properties", propertyRouter);
app.use("/leases", leaseRouter);
app.use("/applications", applicationRouter);

const port = Number(process.env.PORT) || 4000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
