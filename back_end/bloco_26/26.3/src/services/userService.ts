import connection from "../models/connection";
import UserModel from "../models/userModel";
import Iuser from "../interface/user.interface";

export default class UserService{
  private model: UserModel;
  constructor(){
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<Iuser[]>{
    return await this.model.getAll() as Iuser[]
  }
}