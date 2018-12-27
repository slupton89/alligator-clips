
const {app, BrowserWindow, Tray} = require('electron')
const path = require('path');

let mainWindow
let tray = null
var iconPath = path.join(__dirname, './icon/crocodile.png');

function createWindow () {
  mainWindow = new BrowserWindow({width: 300, height: 400, frame: false, icon: iconPath})

  tray = new Tray(iconPath)
  tray.setToolTip('AlligatorClips')

  if(process.platform !== "darwin"){
    var trayMenu = [{
      label: 'Quit',
      click: function () {
        app.quit()
      }
    }];
    var trayMenu = Menu.buildFromTemplate(trayMenu);
    tray.setContextMenu(trayMenu);
  }


  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  mainWindow.on('show', () => {
    tray.setHighlightMode('always')
    const bounds = tray.getBounds()
    const y = bounds.y === 0 ? 0 : (bounds.y - 400);
    mainWindow.setPosition(bounds.x - 150, y);
  })
  mainWindow.on('hide', () => {
    tray.setHighlightMode('never')
  })
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

