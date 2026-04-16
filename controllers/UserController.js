const UserController = {
    async registerPF(req, res) {
        const { nomeCompleto, cpf, email, senha, telefone } = req.body;
        console.log(`Registo de PF: ${nomeCompleto}`);
        return res.status(201).json({ message: "Utilizador registado com sucesso!" });
    },

    async getProfile(req, res) {
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
            return res.json({
                nome: "Ryan Austin",
                pontos: 260
            });
        } catch (error) {
            return res.status(500).json({ message: "Erro ao obter resumo do perfil." });
        }
    },

    async deleteAccount(req, res) {
        try {
            console.log("A eliminar conta do utilizador...");
            
            return res.json({ message: "A tua conta foi eliminada com sucesso." });
        } catch (error) {
            return res.status(500).json({ message: "Erro ao tentar eliminar a conta." });
        }
    }
};
module.exports = UserController;
