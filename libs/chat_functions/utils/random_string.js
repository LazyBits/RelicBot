module.exports = function (charSet, delimeter) {
    var arr = charSet.split(delimeter);
    var text = "";
    text += charSet[Math.floor(Math.random() * charSet.length)];
    return text;
}