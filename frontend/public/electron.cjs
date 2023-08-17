
const { app, BrowserWindow } = require('electron');


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    minWidth: 1000,
    height: 800,
    minHeight: 800,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL('http://localhost:3000/signin');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});