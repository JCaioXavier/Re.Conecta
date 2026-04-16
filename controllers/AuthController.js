const AuthController = {
    async login(req, res) {
        const { email, password } = req.body;
        return res.json({ token: "token_gerado", user: "Ryan Austin" });
    },

    async forgotPassword(req, res) {
        const { email } = req.body;
        return res.json({ message: "Se o email existir, enviámos um link de recuperação." });
    }
};
module.exports = AuthController;
