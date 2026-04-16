const AuthController = {
    async login(req, res) {
        const { email, password } = req.body;
        return res.json({ token: "token_gerado", user: "Ryan Austin" });
    }
};