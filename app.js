const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

const publicPath = path.resolve(__dirname, "./public");
const homePath = path.resolve(__dirname, "./views/home.html");
const loginPath = path.resolve(__dirname, "./views/login.html");
const registerPath = path.resolve(__dirname, "./views/register.html");
app.use(express.static(publicPath));

app.listen(PORT, () => {
	console.log("Servidor corriendo en el puerto ",PORT);
});

app.get("/", (req, res) => {
	res.sendFile(homePath);
});

app.get("/login", (req, res) => {
	res.sendFile(loginPath);
});

app.get("/register", (req, res) => {
	res.sendFile(registerPath);
});