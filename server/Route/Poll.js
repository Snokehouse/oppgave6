import express from 'express';
import {pollController} from '../Controller/index.js';

const router = express.Router();

router.post('/', pollController.createPoll);
router.get('/:id', pollController.getPollById);
router.get('/', pollController.list);
router.put('/:id', pollController.updatePoll);


export default router;