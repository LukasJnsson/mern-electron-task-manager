
import express from 'express';
const router = express.Router();
import { 
    getTasksHandler, 
    postTaskHandler,
    putTaskHandler
} from '../../controllers/tasks.controller.js';
import ensureAuthenticated from '../../middlewares/ensureAuthenticated.middleware.js';


router.get('/', ensureAuthenticated, getTasksHandler);

router.post('/', ensureAuthenticated, postTaskHandler);

router.put('/:id', ensureAuthenticated, putTaskHandler);


export default router;