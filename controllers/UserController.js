
const UserController = {
    async registerPF(req, res) {
        const { nomeCompleto, cpf, email, senha, telefone } = req.body;
        // Lógica para encriptar senha e salvar no base de dados
        console.log(`Registo de PF: ${nomeCompleto}`);
        return res.status(201).json({ message: "Utilizador registado com sucesso!" });
    },

    async updateProfile(req, res) {
        const { nome, email, telefone } = req.body;
        return res.json({ message: "Dados atualizados com sucesso!" });
    }
};