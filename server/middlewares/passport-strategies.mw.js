import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJWT from 'passport-jwt';
import db from '../db';
import { compareHash } from '../utils/password';
import config from '../config';


passport.serializeUser((user, done) => {
    if (user.password) {
        delete user.password//security
    }
    done(null, user);
});

passport.deserializeUser((user, done) => done(null, user));

passport.use(new PassportLocal.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    try {
        const [userFound] = await db.users.find('email', email);
        if (userFound && compareHash(password, userFound.password)) {
            done(null, userFound);

        } else {
            done(null, false);
        }
    } catch (error) {
        done(error);
    }
}));

passport.use(new PassportJWT.Strategy({
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret
}, (payload, done) => {
    try {
        done(null, payload)
    } catch (error) {
        done
    }
    console.log(payload);
}))

