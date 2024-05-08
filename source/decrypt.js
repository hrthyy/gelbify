function decrypt() {
    var decoded = [];
    var temp = [];
    var t = document.getElementById('d-area').value.trim();
    t = t.split(" ");

    for (i=0;i<t.length;i++) {
        t[i] = KEYS.indexOf(t[i]);
    }

    for (i=0;i<(t.length/4);i++) {
        for (j=0;j<4;j++) {
            temp.push(t[4*i+j]);
        }
        decoded.push(temp.join(""));
        temp = [];
    }

    for (i=0;i<decoded.length;i++) {
        decoded[i] = String.fromCharCode(parseInt(decoded[i],4));
    }
    decoded = decoded.join("");
    document.getElementById('output').innerHTML = decoded;

}