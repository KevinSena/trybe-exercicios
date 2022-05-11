import express, { Router, Response } from "express";
import UserController from "../controller/userController";

const route = Router();
const controller: UserController = new UserController();

route.get('/', controller.getAll)

export default route;
