import express from 'express';
import { v4 as uuidvv4} from 'uuid';

//initialize our router
const router = express.Router();

//create a regular array to store users
const users = [
    
]
//all routes in this path start with /users
router.get('/', (req,res) => {
   // console.log(users); //this logs all the users since we don't specify
    res.send(users);
  
    
}); 

router.post('/',(req,res) => {
    //console.log('Route (Post) was reached.');

    const user = req.body;

    const userID = uuidvv4();

    //adding ID to user objects
    const userWithId = { ...user, id: userID}
    users.push(userWithId);

    res.send(`New user: ${user.firstName} has been added to the database.`);
});
export default router;