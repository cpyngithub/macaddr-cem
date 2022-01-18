chrome.runtime.sendMessage({type: "launch", message: ""}, function(response) {
    localStorage.setItem("mac",response);
});