const veiculoModel = require('../models/VeiculosModel');
const veiculos = new veiculoModel();


exports.listarVeiculos = (( req, res) =>{
    const listar = veiculos.listarVeiculos();
    res.render(`listaVeiculos`, {veiculos:listar})
    });

exports.adicionarVeiculos = (req, res) =>{
    const {id, nome} = req.body;
    const novaLista = veiculos.adicionarVeiculo
    ({id: Number(id), nome});
     res.status(201).json(novaLista);

}
exports.editarVeiculos = (req, res) =>{
    const {id} = req.query;
    const {nome} = req.body;
    const editar = veiculos.editarVeiculo(Number(id), nome)
    res.json(editar);
}
exports.excluirVeiculos = (req, res) =>{
    const {id} = req.query;
    const deletar = veiculos.deletarVeiculo(id);
    res.json({ message: "Veículo excluído com sucesso", deletar });
}