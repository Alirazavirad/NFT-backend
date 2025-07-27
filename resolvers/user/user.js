const Usermodel = require("../../models/user.model");
const crypto = require("crypto");
const getUser = async (token) => {
  const user = await Usermodel.findOne({ token });
  return user;
};
const signUp = async (name, username, Email, password) => {
  const user = await Usermodel.findOne({ Email });
  if (user) {
    return { status: 400, message: "کاربری با این ایمیل وجود دارد" };
  }
  const token = await crypto.randomBytes(20).toString("hex");
  const usercount = await Usermodel.countDocuments();
  const newUser = await Usermodel.create({
    name,
    username,
    Email,
    Password: password,
    id: usercount + 1,
    token,
  });
  return newUser;
};
const login = async (Email, password) => {
  const user = await Usermodel.findOne({ Email });
  if (user) {
    if (user.Password == password) {
      const token = await crypto.randomBytes(20).toString("hex");
      user.token = token;
      await user.save();
      return user;
    } else {
      const error = new Error("پسورد اشتباه است ❌");
      throw error;
    }
  } else {
    const error = new Error("کاربری با این مشخصات وجود ندارد 💔");
    throw error;
  }
};
module.exports = {
  getUser,
  signUp,
  login,
};
