import express from "express";
import { userController } from "../controller/UserController";
import { loginUser } from "../controller/LoginController";

export const router = express.Router();

router.post('/new-user/:id', userController.createUser);
router.get('/users/:id', userController.getAllUsers);
router.get('/unique-user/:id', userController.getUserById);
router.post('/att-user/:id', userController.updateUserById);
router.post('/delete-user/:id', userController.desativarUserById);
router.post('/reativar-user/:id', userController.reativarUserById);


router.post('/login', loginUser);