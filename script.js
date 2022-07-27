document.addEventListener('onLoad', function (obj) {
  
});

document.addEventListener('onEventReceived', function (obj) {
const charLimit = {character_limit}; 

if (obj.detail.command === "PRIVMSG") {
    if (obj.detail.body.length > charLimit) {
        obj.detail.body = obj.detail.body.slice(0, charLimit);
        $(".message").last().append(obj.detail.body + '...');
    } else {
        $(".message").last().append(obj.detail.body);
    }
}

});