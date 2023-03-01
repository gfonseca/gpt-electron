const { ipcMain, app, BrowserWindow } = require('electron')
const dgram = require('dgram')
const path = require('path')
const process = require("node:process")

function quit() {
  app.quit()
}

exports.startApp =  function () {
  const server = dgram.createSocket('udp4');
  server.bind(8467)

  let mainWindow = null
  app.whenReady().then(() => {
    const { screen } = require('electron')

    const primaryDisplay = screen.getPrimaryDisplay()
    const { height } = primaryDisplay.workAreaSize

    mainWindow = new BrowserWindow({
      x: 0,
      y: 0,
      height,
      width: 550, 
      frame: false,
      titleBarStyle: 'hidden',
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        webviewTag: true,
        nodeIntegration: true,
      }
    })

    server.on('message', (message, remote) => {
      let isVisible = mainWindow.isVisible()
      if (isVisible ) {
        mainWindow.hide()
      } else {
        mainWindow.show()
      }
    })

    let indexPath = path.join(__dirname, "index.html")
    mainWindow.loadFile(indexPath).then(() => {

      mainWindow.webContents.executeJavaScript(`
        document.getElementById('chat-web-view').style.height = '${height}px'
      `)

      mainWindow.on('blur', () => {
        mainWindow.hide()
      });
    })

    ipcMain.handle('quitApp', quit)
    ipcMain.handle('reloadApp', () => app.relaunch())
    process.on("SIGINT", quit)
    process.on("SIGTERM", quit)
  })
}