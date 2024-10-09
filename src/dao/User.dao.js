import userModel from "./models/User.js";

export default class Users {
  get = (params) => {
    return userModel.find(params);
  };

  getBy = (params) => {
    return userModel.findById(params);
  };

  save = (doc) => {
    return userModel.create(doc);
  };

  saveMany = async (docs) => {
    return await userModel.insertMany(docs);
  };

  update = (id, doc) => {
    return userModel.findByIdAndUpdate(id, { $set: doc });
  };

  delete = (id) => {
    return userModel.findByIdAndDelete(id);
  };
}
