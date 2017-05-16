/**
 * Created by Cain on 2017/5/15.
 */


var backWindow = browser.extension.getBackgroundPage();
var currentUa = getCurrentUa();
displayUa();

document.getElementsByClassName("uaBtn")[0].addEventListener("click",function(e){
    var ua = document.getElementsByClassName("uaInput")[0].value;
    currentUa = ua;
    backWindow.ua = ua;
    displayUa();
})

function displayUa(){
    document.getElementsByClassName("uaLabel")[0].innerText = currentUa;
}

function  getCurrentUa() {
    if (backWindow.ua == ""){
        console.log(navigator.userAgent);
        return navigator.userAgent;
    }else{
        console.log(backWindow.ua);
        return backWindow.ua;
    }
}