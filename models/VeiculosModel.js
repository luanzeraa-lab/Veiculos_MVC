let veiculos = [
    { id: 1, nome: "Corolla" },
    { id: 2, nome: "Civic" },
    { id: 3, nome: "Onix" }
];
module.exports = class VeiculosModel{
    constructor(){

    }

     listarVeiculos(){
        return veiculos;
    }
    
     adicionarVeiculo(veiculo){
        veiculos.push(veiculo);
        return veiculos;
    }

     editarVeiculo(id, nome){
        const veiculo = veiculos.findIndex(veiculo => veiculo.id ==id);
        
        veiculos[veiculo].nome = nome;
        return veiculos[veiculo];
    }
     deletarVeiculo(id){
        const veiculo = veiculos.findIndex(veiculo => veiculo.id ==id);
    
        veiculos.splice(veiculo, 1)
        return veiculos
    }
}

