function encrypt() {
    var temp;
    var r = "";
    var code = [];
    var encoded = [];
    var t = document.getElementById('e-area').value;
    for (i=0;i<t.length;i++) {
        temp = toBase128(t.charCodeAt(i))
        if (temp.indexOf('-') == -1) {
            temp = '0-' + temp;
        }
        temp = temp.split('-')
        code.push(temp[0])
        code.push(temp[1])
    }

    for (i=0;i<code.length;i++) {
        encoded.push(KEYS128[Number(code[i])]);
    }
    
    document.getElementById('output').innerHTML = encoded.join(' ');
}