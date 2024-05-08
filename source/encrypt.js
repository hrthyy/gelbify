const KEYS = ["miski","gelbi","fodi","mazi"];

function encrypt() {
    var r = "";
    var code = [];
    var encoded = [];
    var t = document.getElementById('e-area').value;
    for (i=0;i<t.length;i++) {
        code.push(t.charCodeAt(i).toString(4))
    }
    console.log(code);
    for (i=0;i<code.length;i++) {
        while (code[i].length < 4) {
            code[i] = "0" + code[i];
        }
    }

    for (i=0;i<code.length;i++) {
        for (j=0;j<4;j++) {
            console.log(code[i][j])
            r += KEYS[code[i].at(j)];
            if (j!=3) {
                r += " ";
            }
        }
        encoded.push(r);
        r="";
    }
    encoded = encoded.join(" ");
    document.getElementById('output').innerHTML = encoded;
}