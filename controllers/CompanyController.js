const CompanyController = {
    async registerPJ(req, res) {
        const { cnpj, razaoSocial, endereco, horarioFuncionamento, itensAceitos } = req.body;
        return res.status(201).json({ message: "Empresa parceira registada!" });
    }
};