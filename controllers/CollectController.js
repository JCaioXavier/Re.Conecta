const CollectController = {
    async createRequest(req, res) {
        const { itens, localColeta, dataAgendamento, periodo } = req.body;
        return res.status(201).json({ 
            message: "Coleta agendada!",
            pointsEarned: 50
        });
    }
};