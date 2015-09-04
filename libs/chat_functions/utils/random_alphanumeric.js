module.exports = function (len, charSet) {
    var text = " ";
    for( var i=0; i < len; i++ )
    {
        if(i == 4)
            text += ' ';
        else
            text += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return text;
}