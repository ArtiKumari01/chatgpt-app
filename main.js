const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function askChatGPT(reqText) {
  // console.log("console started");
const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: reqText,
  max_tokens: 2048,
});
// console.log(completion.data.choices[0].text);
return completion.data.choices[0].text;
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      // The nodeIntegration option in Electron's webPreferences configuration allows you to enable or disable Node.js integration within the Electron renderer process.
      preload: path.join(__dirname, 'preload.js')
      // This script will run in the renderer process before any other scripts, allowing you to set up custom communication channels and selectively expose APIs.
    }
  });

  mainWindow.webContents.openDevTools();

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.on('inputValue:send', (e, options) => {
  // console.log(options);
  
  let msg = askChatGPT(options.value);
  // console.log("msg is printed",msg);

// Handling the resolved value
msg.then((value) => {
  // console.log("Get Value",value); 
  // Output: Hello, World!
  let obj = {
    value: value,
  };
  
  mainWindow.webContents.send('inputValue:print', obj);

});

});