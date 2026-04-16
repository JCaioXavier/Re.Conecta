const express = require('express');
const router = express.Router();

// Importação correta dos controladores
const UserController = require('../controllers/UserController');
const CollectController = require('../controllers/CollectController');
const AuthController = require('../controllers/AuthController');
const CompanyController = require('../controllers/CompanyController');

// Rotas de Autenticação
router.post('/api/auth/login', AuthController.login);
router.post('/api/auth/forgot-password', AuthController.forgotPassword);

// Rotas de Usuario
router.post('/api/users/register-pf', UserController.registerPF);
router.get('/api/user/profile', UserController.getProfile);
router.get('/api/user/profile-summary', UserController.getProfileSummary);
router.put('/api/user/update', UserController.updateProfile);
router.delete('/api/user/delete', UserController.deleteAccount);

// Rotas de Empresa
router.post('/api/company/register', CompanyController.registerPJ);
router.post('/api/company/register-representative', CompanyController.registerRepresentative);

// Rotas de Coleta
router.post('/api/collect/request', CollectController.createRequest);
router.get('/api/collect/history', CollectController.listHistory);
router.delete('/api/collect/cancel/:idColeta', CollectController.cancelRequest);

module.exports = router;
