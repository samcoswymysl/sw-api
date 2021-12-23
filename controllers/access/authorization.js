// dependencis
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { compare } = require('bcrypt');
const passportJWT = require('passport-jwt');

// import
const { User } = require('../../DB/models/index');
const {
  WrongEmailError,
  AccountActivationError,
  WrongPasswordError,
  WrongPublicKeyError,
  NotAdminError,
} = require('../../utils/errors');

// variable
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const configJWTStrategy = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use('login', new LocalStrategy({ usernameField: 'email', session: false }, async (name, password, done) => {
  try {
    const findUser = await User.findOne({ where: { email: name } });

    if (!findUser) {
      throw new WrongEmailError('Your Email is wrong');
    }

    const passwordMatch = await compare(password, findUser.password);
    if (!passwordMatch) {
      throw new WrongPasswordError('Wrong password');
    }
    return done(null, findUser);
  } catch (e) {
    done(e);
  }
}));

// authentic user
async function verifyUser(payload, done) {
  try {
    const user = await User.findOne(({ where: { id: payload.id } }));

    const keyMatch = await compare( user.email + process.env.PUBLIC_KEY,
      payload.publicKey,
    );
    if (!keyMatch) {
      throw new WrongPublicKeyError('Wrong public key');
    }

    done(null, user);
  } catch (er) {
    done(er);
  }
}

passport.use('userAccess', new JWTStrategy(configJWTStrategy, verifyUser));

module.exports = {
  passport,
};
