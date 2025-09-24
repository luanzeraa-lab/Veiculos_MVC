const express = require('express')
const router = express.Router();

const veiculosController = require ('../controllers/VeiculosController');

router.get('/listar', veiculosController.listarVeiculos)
router.get('/adicionar', veiculosController.cadastroVeiculos);
router.post('/adicionar', veiculosController.adicionarVeiculos)
router.post('/editar/:id', veiculosController.editarVeiculos)
router.post('/excluir/:id', veiculosController.excluirVeiculos)

module.exports = router;

