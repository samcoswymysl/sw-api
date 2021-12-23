const jwt = require('jsonwebtoken');
const { NotFoundError, NotLoginError } = require('../../utils/errors');

const loginUser = async (req, res, next) => {
  const { user } = req;

  try {
    if (!user) throw new NotLoginError('You are not logged in');

    const token = jwt.sign(
      {
        id: user.id,
        publicKey: user.publicKey,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    );

    res.cookie('auth', token, {
      // secure: true,
      signed: true,
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    });
    res.json('cookie is set');
  } catch (e) {
    next(e);
  }
};

module.exports = {
  loginUser,
};
