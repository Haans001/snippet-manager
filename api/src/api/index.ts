import { Router } from "express";
import AuthController from "./controllers/Auth.controller";

export default (): Router => {
  const api = Router();

  api.use("/auth", AuthController());

  return api;
};
