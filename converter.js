function convertPunyCode(str) {
    var regexp_url = /(xn--[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+)/g; // ])/;
    var regexp_makeLink = function(all, xnstr, h, href) {
        var result = punycode.toUnicode(xnstr);
        if (result.length > 1) {
            return result;
        } else {
            return xnstr;
        }
    }
    return str.replace(regexp_url, regexp_makeLink);
}

document.documentElement.innerHTML = convertPunyCode(document.documentElement.innerHTML);