const CompanyController = {
    // Esta função já existia para registar os dados da Empresa
    async registerPJ(req, res) {
        const { cnpj, razaoSocial, endereco, horarioFuncionamento, itensAceitos } = req.body;
        return res.status(201).json({ message: "Empresa parceira registada!" });
    },

    // NOVA FUNÇÃO: Adicionada para lidar com o registo do representante
    async registerRepresentative(req, res) {
        const { nomeCompleto, cpf, email, cargo, telefone } = req.body;
        
        // Lógica para guardar os dados do representante associados à empresa
        console.log(`Registo de Representante: ${nomeCompleto} - CPF: ${cpf}`);
        
        return res.status(201).json({ message: "Representante registado com sucesso!" });
    }
};

// Exportar o controlador para poder ser utilizado no routes.js
module.exports = CompanyController;
