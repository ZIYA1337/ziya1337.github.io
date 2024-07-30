var text_1 = '抱歉，子牙的小站并不对海外用户提供任何服务，请使用中国大陆ip访问',
text_2 = 'Sorry, ziya1337.com does not provide any service to overseas users. Please use a Chinese mainland IP address to access';
repeat(text_1, 1);
setTimeout(function () {
  repeat(text_2, 2);
}, text_1.length * 100 + 1000);

function repeat(text, n) {
  var i = 0,
  repeatable = setInterval(function () {
    $('#text_' + n).text($('#text_' + n).text() + text[i]);
    i++;
    if (i >= text.length) {
      clearInterval(repeatable);
    }
  }, 100);
}
//# sourceURL=pen.js