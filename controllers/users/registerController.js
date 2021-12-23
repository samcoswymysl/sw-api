const { hash } = require('bcrypt');

const { User } = require('../../DB/models/index');
const { WrongDataError } = require('../../utils/errors');

const registerUser = async (req, res, next) => {
  const {
    email,
    password,
  } = req.body;

  try {
    if (!email || !password) throw new WrongDataError('You must give all data');

    const hashPassword = await hash(password, 10);
    const publicKey = await hash(email + process.env.PUBLIC_KEY, 10);

    const newUser = await User.create({
      email,
      password: hashPassword,
      publicKey,
    });

    res.json(newUser);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  registerUser,
};
