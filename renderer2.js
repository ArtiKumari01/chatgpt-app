ipcRenderer.on('inputValue:print', (event) => {
    // alertSuccess(`Hello ${event.value}`);
    // console.log(event.value);
    addTask(event.value);
    
  });
  
  function sendMyMsg() {
    let value2 = document.getElementById("inp").value;
    // console.log("File is testing");
    addTask(value2);
    ipcRenderer.send('inputValue:send', {
      value: value2,
    });
  }
  
  function alertSuccess(message) {
    Toastify.toast({
      text: message,
      duration: 5000,
      close: false,
      style: {
        
        background: 'black',
        color: 'white',
        textAlign: 'center',
      },
    });
  }
  
  function alertError(message) {
    Toastify.toast({
      text: message,
      duration: 5000,
      close: false,
      style: {
        background: 'red',
        color: 'white',
        textAlign: 'center',
      },
    });
  }
  
  // File select listener
  // img.addEventListener('change', loadImage);
  // Form submit listener
  // form.addEventListener('submit', sendImage);
  