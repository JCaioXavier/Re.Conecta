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
    },

    async getProfileSummary(req, res) {
        try {
            // No futuro, estes dados virão de uma consulta à base de dados
            return res.json({
                nome: "Ryan Austin",
                pontos: 260
            });
        } catch (error) {
            return res.status(500).json({ message: "Erro ao obter resumo do perfil." });
        }
    },

    // NOVA FUNÇÃO: Lógica para eliminar a conta do utilizador
    async deleteAccount(req, res) {
        try {
            // Lógica para remover o registo da base de dados (ex: User.delete)
            console.log("A eliminar conta do utilizador...");
            
            return res.json({ message: "A tua conta foi eliminada com sucesso." });
        } catch (error) {
            return res.status(500).json({ message: "Erro ao tentar eliminar a conta." });
        }
    }
};
module.exports = UserController;
