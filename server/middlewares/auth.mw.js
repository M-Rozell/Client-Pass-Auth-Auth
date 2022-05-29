
import passport from "passport";


export function tokenCheck(req, res, next) {
    
    passport.authenticate('jwt', (err, user, info) => {
        if (err) {
            return next(err)
        }
        if (info) {
            info.message === "invalid token"
            return res.status(401).json({ message: "this is not the token you are looking for" })
        }
        if (!user) {
            return res.status(401).json({ message: "redirect to login" })
        }    
        
        req.user = user;
        next();
    
    })(req, res, next);
}