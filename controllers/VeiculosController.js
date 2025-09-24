const veiculoModel = require('../models/VeiculosModel');
const veiculos = new veiculoModel();


exports.listarVeiculos = (( req, res) =>{
    const listar = veiculos.listarVeiculos();
    res.render(`listaVeiculos.ejs`, {veiculos:listar})
    });

    exports.cadastroVeiculos = (req, res) => {
    res.render("cadastroVeiculos.ejs");
};


exports.adicionarVeiculos = (req, res) =>{
    const {id, nome} = req.body;

    const listaVeiculos = veiculos.listarVeiculos();
    
    const checarId = listaVeiculos.find(veiculo => veiculo.id ==id);

    if(checarId){
        return res.send("Veículo já cadastrado")
    }
    const novaLista = veiculos.adicionarVeiculo({id: Number(id), nome});
    res.redirect("/veiculos/listar");

}
exports.editarVeiculos = (req, res) =>{
    const {id} = req.params;
    const {nome} = req.body;
    const editar = veiculos.editarVeiculo(Number(id), nome)
    res.redirect("/veiculos/listar");
}
exports.excluirVeiculos = (req, res) =>{
    const {id} = req.params;
    const deletar = veiculos.deletarVeiculo(id);
    res.redirect("/veiculos/listar");
}