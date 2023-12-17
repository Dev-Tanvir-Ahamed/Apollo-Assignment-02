import express from 'express';
import { userController } from './students.controller';

const router = express.Router();
// will call controller function
router.post('/create-user', userController.createUser);
router.get('/', userController.getAllUser);
router.get('/:userId', userController.getUserById);
router.delete('/:userId', userController.deleteUserById);
router.put('/:userId', userController.udatdeUser);
export const userRoute = router;
