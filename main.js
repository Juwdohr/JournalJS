const { app, BrowserWindow, ipcMain} = require("electron");

let win = null;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizeable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on('generatePassword', (event, data) => {
    const randomPassword = data + Math.random().toString(36).substring(2, 5);
    win.webContents.send('generatedPassword', randomPassword);
})