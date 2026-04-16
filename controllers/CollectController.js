const CollectController = {
    async createRequest(req, res) {
        const { itens, localColeta, dataAgendamento, periodo } = req.body;
        return res.status(201).json({ 
            message: "Coleta agendada!",
            pointsEarned: 50
        });
    },

    // Função adicionada
    async listHistory(req, res) {
        // Lógica para listar as coletas do utilizador
        return res.json([
            { id: 1, itens: ["Celular"], status: "Concluída", data: "2023-10-01" },
            { id: 2, itens: ["Monitor"], status: "Agendada", data: "2023-11-15" }
        ]);
    },

    // Função adicionada
    async cancelRequest(req, res) {
        const { idColeta } = req.params;
        // Lógica para cancelar a coleta com base no ID
        return res.json({ message: `Coleta ${idColeta} cancelada com sucesso.` });
    }
};
module.exports = CollectController;
