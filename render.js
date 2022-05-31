const ipcRenderer = require('electron').ipcRenderer;

const generatePassword = () => {
    ipcRenderer.send('generatePassword', document.querySelector('.keyWord').value);
}

ipcRenderer.on('generatedPassword', (event, data) => {
    alert(data);
})