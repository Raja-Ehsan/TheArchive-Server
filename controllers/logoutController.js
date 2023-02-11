const handleLogout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.end();
    } catch (error) {
        res.sendStatus(500)
    }
}

module.exports = handleLogout