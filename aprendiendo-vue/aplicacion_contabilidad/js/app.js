const {app, BrowserWindow} = require("electron");

const url = require("url");
const path = require("path");

let mainWindow;
app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width: 1300,
		height: 650,
		title: "TRANSACCIONES BANCARIAS FUNDACIÓN JULIAN OCAMPO",
		resizable:false,
		icon: path.join(__dirname, "/../css/icons/logo.ico"),
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname,"../html/index.html"),
		protocol: "file",
		slashes: true
	}))
});

