import Users from "../dao/User.dao.js";
import { customError } from "../errors/custom.error.js";
import { generateUsersMock } from "../mocks/users.mock.js";

export class UserServices {
  constructor() {
    this.userDao = new Users();
  }
  async getAll() {
    const users = await this.userDao.get();
    return users;
  }

  async getById(id) {
    const user = await this.userDao.getById(id);
    if (!user) throw customError.notFoundError(`User id ${id} not found`);
    return user;
  }

  async getUserByEmail(email) {
    const user = await this.userDao.getByEmail(email);
    //if (!user) throw customError.notFoundError(`User email ${email} not found`);
    return user;
  }

  async create(data) {
    const user = await this.userDao.save(data);
    return user;
  }

  async createMany(data) {
    const users = await this.userDao.saveMany(data);
    return users;
  }

  async update(id, data) {
    const user = await this.userDao.update(id, data);
    return user;
  }
  async remove(id) {
    await this.userDao.delete(id);
    return "ok";
  }
  async createMocks() {
    const users = generateUsersMock(10);
    const usersDb = await this.userDao.saveMany(users);
    return usersDb;
  }
}
