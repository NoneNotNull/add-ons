/**
 * Created by Cain on 2017/5/15.
 */



getActiveTab().then(getCookies);

document.addEventListener("click",function (event) {
    if(event.target.classList.contains("removeAll")){
        getActiveTab().then(removeCookies);
    }
    if(event.target.classList.contains("setAll")){
        getActiveTab().then(setCookies);
    }
},false)


function getActiveTab(){
    return browser.tabs.query({currentWindow: true, active: true});
}

var backWindow = browser.extension.getBackgroundPage();

document.addEventListener("click",function(){
    // pass
},false)

function displayCookies(){
    // 显示cookie到页面上
}

function setCookie(){
    // 设置单一的cookie:name=>cookie
}

function setCookies(tabs){
    // 设置cookie,通常为document.cookie的值
    var cookies = document.getElementsByClassName("ckInput")[0].value.split(";");
    for(var i=0;i<cookies.length;i++){
        ckname = cookies[i].split("=")[0];
        ckvalue = cookies[i].split("=")[1];
        browser.cookies.set({
            url: tabs[0].url,
            name: ckname,
            value: ckvalue
        });
    }
}

function removeCookie(){
    // 删除键为name的cookie
}

function removeCookies(tabs){
    // 删除所有cookies
    var getAllCookies = browser.cookies.getAll({url:tabs[0].url});
    getAllCookies.then((cookies)=>{
        for(cookie of cookies){
            var removing = browser.cookies.remove({
                url:tabs[0].url,
                name:cookie.name
            });
            removing.then(onRemoved);
        }
    })
}

function getCookie() {
    // 获取键为name的cookie，返回字符串
}

function getCookies(tabs){
    // 获取所有cookies，返回JSON格式
    var getAllCookies = browser.cookies.getAll({url:tabs[0].url});
    getAllCookies.then((cookies)=>{
        for (cookie of cookies){
            console.log(cookie.name,cookie.value);
            // var nameTag = document.createElement("label");
            // nameTag.innerText = cookie.name;
            // var valueTag = document.createElement("input");
            // valueTag.value = cookie.value;
            // var saveTag = document.createElement("button");
            // saveTag.setAttribute("type","button");
            // saveTag.innerText = "Save";
            // var deleteTag = document.createElement("button");
            // deleteTag.setAttribute("type","button");
            // deleteTag.innerText = "Delete";
            // var divTag = document.createElement("div");
            // divTag.appendChild(nameTag);
            // divTag.appendChild(valueTag);
            // divTag.appendChild(saveTag);
            // divTag.appendChild(deleteTag);
            // document.body.appendChild(divTag);
        }
    });
}

function onRemoved(cookie){
    console.warn("Removed: " + cookie);
}