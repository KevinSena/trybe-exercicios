import {Pool, ResultSetHeader} from 'mysql2/promise'
import Iuser from '../interface/user.interface'

export default class UserModel {
  private connection: Pool;
  constructor(connection: Pool) {
    this.connection = connection;
  }
  public async getAll(): Promise<Iuser[]> {
    const [result] = await this.connection.execute('SELECT * FROM TypeScriptExpress.Users');
    return result as Iuser[];
  }
}
