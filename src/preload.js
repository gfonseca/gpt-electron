const { contextBridge, ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
    contextBridge.exposeInMainWorld('backContext', {
      quitAppSig: () =>  ipcRenderer.invoke('quitApp'),
      // we can also expose variables, not just functions
    })
  })

