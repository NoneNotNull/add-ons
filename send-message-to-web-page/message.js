/**
 * Created by Cain on 2017/5/10.
 */

browser.runtime.onMessage.addListener(receiveMessage);

function receiveMessage(message) {
    console.log(message);
}