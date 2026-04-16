const UserController = require('../controllers/UserController');
const CollectController = require('../controllers/CollectController');
const AuthController = require('../controllers/AuthController');
const CompanyController = require('../controllers/UserController');

// Autenticar
router.post('/api/auth/login', AuthController.login);
router.post('/api/auth/forgot-password', AuthController.forgotPassword);

// Usuario
router.post('/api/users/register-pf', UserController.registerPF);
router.get('/api/user/profile', UserController.getProfile);
router.put('/api/user/update', UserController.updateProfile);

// Compania
router.post('/api/company/register', CompanyController.registerPJ);

// Coleta
router.post('/api/collect/request', CollectController.createRequest);
router.get('/api/collect/history', CollectController.listHistory);
router.delete('/api/collect/cancel/:idColeta', CollectController.cancelRequest);