const express = require('express')
const router = express.Router();

const veiculosController = require ('../controllers/VeiculosController');

router.get('/listar', veiculosController.listarVeiculos)
router.post('/adicionar', veiculosController.adicionarVeiculos)
router.post('/editar', veiculosController.editarVeiculos)
router.post('/excluir', veiculosController.excluirVeiculos)

module.exports = router;

