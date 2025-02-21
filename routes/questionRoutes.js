import express from 'express'
const questionRouter = express.Router();
import { showQ} from "../controllers/questionController.js";
questionRouter.get("/all", showQ);
export default questionRouter;