
import * as express from 'express';
import routes from './routes';
import * as passport from 'passport';
import * as path from 'path' 


import './middlewares/passport-strategies.mw'; 
                                            
const app = express();


app.use(passport.initialize()); //this makes it available middleware
app.use(express.static('public'));
app.use(express.json());  
app.use(routes);
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});//this says I need some client side routing that needs to happen
//thats not associaated with my server side routes (they will always be
//when you hit enter or refresh in the url bar). the * will catch any but
//you could put specific ['/login', '/token'] in place of '*'  

const port = process.env.Port || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
console.log('You can do it!!')






