
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import { Router } from 'express';
import config from '../../config';

const router = Router();

router.post('/', passport.authenticate('local', {
    successRedirect: '',
    failureRedirect: '', session: false
}), async (req, res) => {

    try {
        const token = jwt.sign(
            { userid: req.user.id, email: req.user.email, role: 'guest' },
            config.jwt.secret,
            { expiresIn: config.jwt.expires }
        ); //payload 

        res.json(token);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'my code sucks!' });
    }
})

export default router;




