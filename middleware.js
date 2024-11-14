export async function ensuredAuthenticated(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: "Token não fornecido" });
    }

    const [, user] = token.split(" "); // Corrigido para usar espaço como delimitador.

    if (user === "admin") {
        return next();
    }

    res.status(401).json({ error: "Acesso não permitido!" });
}