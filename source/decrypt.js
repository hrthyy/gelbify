function decrypt() {
    var out_field = document.getElementById('output');
    var decoded = [];
    var temp = "";
    var t = document.getElementById('d-area').value.trim();
    t = t.split(" ");

    for (i=0;i<t.length;i++) {
        t[i] = KEYS128.indexOf(t[i]);
    }       
    for (i=0;i<t.length;i++) {
        temp += String(t[i]);
        if (i%2==0) {
            temp += '-';
        } else {
            temp += ' ';
        }
    }
    
    decoded = temp.trim().split(' ');
    for (i=0;i<decoded.length;i++) {
        decoded[i] = fromBase128(decoded[i]);
        decoded[i] = String.fromCharCode(decoded[i]);
    }
    
    document.getElementById('output').innerHTML = decoded.join('');

}