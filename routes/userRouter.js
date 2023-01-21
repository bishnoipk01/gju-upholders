import  express  from "express";

// get route handler function from Controllers
import { register,login} from "../controllers/authController.js";

// Create route handler provided by express
const userRouter = express.Router();

// route handler for diffrent urls
userRouter.post('/register',register)
userRouter.post('/login',login)

export default userRouter;