//an endpoint I want to protect and access in my components
//requires a token to be in local storage to access this endpoint

import { Router } from 'express';
import { tokenCheck } from '../../middlewares/auth.mw';

const router = Router();

router.get('/', tokenCheck, (req, res) => {

    try {
        res.json({ message: `Hell Yeah, got that token ${req.user.email}!!!` })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'my code sucks', error: error.message })
    }
});

export default router;