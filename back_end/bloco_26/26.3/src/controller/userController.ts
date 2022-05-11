import { StatusCodes } from "http-status-codes";
import UserService from "../services/userService";
import { Request, Response } from "express";
import Iuser from "../interface/user.interface";

export default class UserController {
  private service: UserService;
  constructor(){
    this.service = new UserService();
    this.getAll = this.getAll.bind(this)
  }

  // public getAll = async(_req: Request, res: Response) => {
  //   const result: Iuser[] = await this.service.getAll();
  //   return res.status(StatusCodes.OK).json(result);
  // }
  public async getAll(_req: Request, res: Response): Promise<Response> {
    const result: Iuser[] = await this.service.getAll();
    return res.status(StatusCodes.OK).json(result);
  }
}