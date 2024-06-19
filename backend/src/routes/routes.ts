import express from "express";
import { userController } from "../controller/UserController";
import { loginUser } from "../controller/LoginController";
import { authenticateToken } from "../middlewares/AuthMiddleware";
import { graphController } from "../controller/GraphicController";

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

//Rotas dos graficos de adm
router.get('/graph-area', graphController.getgrapharea);
router.get('/graph-bar', graphController.getgraphbar);
router.get('/graph-correcao', graphController.getcorrecoes);

//Rotas dos graficos de editor
router.get('/graph-area-editor', graphController.editor_Graph_Area_Vs_Status);
router.get('/graph-bar-editor', graphController.editor_Graph_Bar_Status_Vs_Analista);
router.get('/graph-correcao-editor', graphController.editor_Correcoes);