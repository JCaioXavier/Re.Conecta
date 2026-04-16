const CollectController = {
    async createRequest(req, res) {
        const { itens, localColeta, dataAgendamento, periodo } = req.body;
        return res.status(201).json({ 
            message: "Coleta agendada!",
            pointsEarned: 50
        });
    },

    async listHistory(req, res) {
        return res.json([
            { id: 1, itens: ["Celular"], status: "Concluída", data: "2023-10-01" },
            { id: 2, itens: ["Monitor"], status: "Agendada", data: "2023-11-15" }
        ]);
    },

    async cancelRequest(req, res) {
        const { idColeta } = req.params;
        return res.json({ message: `Coleta ${idColeta} cancelada com sucesso.` });
    }
};
module.exports = CollectController;
