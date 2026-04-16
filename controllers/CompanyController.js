const CompanyController = {
    async registerPJ(req, res) {
        const { cnpj, razaoSocial, endereco, horarioFuncionamento, itensAceitos } = req.body;
        return res.status(201).json({ message: "Empresa parceira registada!" });
    },

    async registerRepresentative(req, res) {
        const { nomeCompleto, cpf, email, cargo, telefone } = req.body;
        
        console.log(`Registo de Representante: ${nomeCompleto} - CPF: ${cpf}`);
        
        return res.status(201).json({ message: "Representante registado com sucesso!" });
    }
};

module.exports = CompanyController;
