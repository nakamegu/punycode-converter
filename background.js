chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null,{file: "punycode.js"}, function() {
        chrome.tabs.executeScript(null,{file: "converter.js"}, function() {})
    })
});
