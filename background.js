var macAddr ="";
//监听content js 启动事件
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
       if (request.type == "launch"){
           sendResponse(macAddr);
      }
      return true;
});


var port;
function onDisconnected() {
    console.log(chrome.runtime.lastError);
    port = null;
}

function onNativeMessage(message) {
    macAddr = message.mac;
}

function connect() {
    port = chrome.runtime.connectNative('com.yd.macaddr.nativemessage');
    port.onMessage.addListener(onNativeMessage);
    port.onDisconnect.addListener(onDisconnected);
    port.postMessage(null);
}
 
// 调用本地服务
connect();