/**
 * Created by Cain on 2017/5/12.
 */

// background-javascript在附件组件调试器调试

var ua = "";

browser.webRequest.onBeforeRequest.addListener(
    listenRequest,
    {urls:["<all_urls>"]}
);

browser.webRequest.onBeforeSendHeaders.addListener(
    changeUA,
    {urls:["<all_urls>"]},
    ["blocking", "requestHeaders"]
)


function changeUA(e){
    for(var header of e.requestHeaders){
        if(header.name.toLowerCase() === "user-agent"){
            header.value = ua;
        }
    }
    return {requestHeaders: e.requestHeaders};
}

function listenRequest(request){
    console.info("Loading: " + request.url);
}