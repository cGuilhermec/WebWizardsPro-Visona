import express from "express";
import { userController } from "../controller/UserController";
import { loginUser } from "../controller/LoginController";
import { authenticateToken } from "../middlewares/AuthMiddleware";
import { graphpizza } from "../controller/GraphicController";

export const router = express.Router();

//Rotas Privadas, precisa do token.
router.post('/new-user/:id', authenticateToken, userController.createUser);
router.get('/users/:id', authenticateToken, userController.getAllUsers);
router.get('/unique-user/:id', authenticateToken, userController.getUserById);
router.post('/att-user/:id', authenticateToken, userController.updateUserById);
router.post('/delete-user/:id', authenticateToken, userController.desativarUserById);
router.post('/reativar-user/:id', authenticateToken, userController.reativarUserById);
router.post('/attpass/:id', authenticateToken, userController.changePassword);

//Rotas publicas, não precisa de token.
router.post('/login', loginUser);
router.get('/graph-area', graphpizza.getgrapharea);
router.get ('/graph-bar', graphpizza.getgraphbar);
router.get ('/graph-correcao', graphpizza.getcorrecoes);