const express = require('express');
const router = express.Router();

// Importação correta dos controladores
const UserController = require('../controllers/UserController');
const CollectController = require('../controllers/CollectController');
const AuthController = require('../controllers/AuthController');
const CompanyController = require('../controllers/CompanyController'); // Corrigido aqui

// Autenticar
router.post('/api/auth/login', AuthController.login);
router.post('/api/auth/forgot-password', AuthController.forgotPassword); 

// Utilizador (Pessoa Física)
router.post('/api/users/register-pf', UserController.registerPF);
router.get('/api/user/profile', UserController.getProfile); 
router.put('/api/user/update', UserController.updateProfile);

// Empresa (Pessoa Jurídica)
router.post('/api/company/register', CompanyController.registerPJ);

// Coleta
router.post('/api/collect/request', CollectController.createRequest);
router.get('/api/collect/history', CollectController.listHistory); 
router.delete('/api/collect/cancel/:idColeta', CollectController.cancelRequest); 

// Exportar as rotas
module.exports = router;
