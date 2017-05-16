/**
 * Created by Cain on 2017/5/11.
 */

document.getElementsByTagName("button")[0].addEventListener('click',sendToPage,false);

function sendToPage(){
    var sendStr = document.getElementsByClassName("message")[0].value;
    if(sendStr == ""){
        alert("Please Input The Message");
    }else{
        var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        gettingActiveTab.then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id, sendStr);
        });
    }
}