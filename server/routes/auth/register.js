
import * as jwt from 'jsonwebtoken';
import { Router } from 'express';
import db from '../../db';
import config from '../../config';
import { generateHash } from '../../utils/password';

const router = Router();

router.post('/', async (req, res) => {

    const newUser = req.body;

    try {
        newUser.password = generateHash(newUser.password);

        const result = await db.users.insert(req.body.email, req.body.password);
        const token = jwt.sign(
            { userid: result.insertId, email: newUser.email, role: 'guest' },
            config.jwt.secret,
            { expiresIn: config.jwt.expires }
        );

        console.log(newUser);

        res.json(token);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'my code sucks!' });

    }
})

export default router;





