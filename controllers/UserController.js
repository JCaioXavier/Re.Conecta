const UserController = {
    async registerPF(req, res) {
        const { nomeCompleto, cpf, email, senha, telefone } = req.body;
        console.log(`Registo de PF: ${nomeCompleto}`);
        return res.status(201).json({ message: "Utilizador registado com sucesso!" });
    },

    // Função adicionada
    async getProfile(req, res) {
        // Lógica para ir buscar o perfil à base de dados (usando o ID do token, por exemplo)
        return res.json({ 
            nomeCompleto: "Ryan Austin", 
            email: "ryan.austin@email.com", 
            telefone: "(82) 99999-9999" 
        });
    },

    async updateProfile(req, res) {
        const { nome, email, telefone } = req.body;
        return res.json({ message: "Dados atualizados com sucesso!" });
    }
};
module.exports = UserController;
