import userModel from "./models/User.js";

export default class Users {
  get = (params) => {
    return userModel.find(params);
  };

  getById = (params) => {
    return userModel.findById(params);
  };

  getByEmail = (email) => {
    return userModel.findOne({ email });
  };

  save = (doc) => {
    return userModel.create(doc);
  };

  saveMany = async (docs) => {
    return await userModel.insertMany(docs);
  };

  update = (id, doc) => {
    return userModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
  };

  delete = (id) => {
    return userModel.findByIdAndDelete(id);
  };
}
