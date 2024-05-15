const KEYS128 = ["miski", "miskI", "misKi", "misKI", "miSki", "miSkI", "miSKi", "miSKI", "mIski", "mIskI", "mIsKi", "mIsKI", "mISki", "mISkI", "mISKi", "mISKI", "Miski", "MiskI", "MisKi", "MisKI", "MiSki", "MiSkI", "MiSKi", "MiSKI", "MIski", "MIskI", "MIsKi", "MIsKI", "MISki", "MISkI", "MISKi", "MISKI", "gelbi", "gelbI", "gelBi", "gelBI", "geLbi", "geLbI", "geLBi", "geLBI", "gElbi", "gElbI", "gElBi", "gElBI", "gELbi", "gELbI", "gELBi", "gELBI", "Gelbi", "GelbI", "GelBi", "GelBI", "GeLbi", "GeLbI", "GeLBi", "GeLBI", "GElbi", "GElbI", "GElBi", "GElBI", "GELbi", "GELbI", "GELBi", "GELBI", "tripi", "tripI", "triPi", "triPI", "trIpi", "trIpI", "trIPi", "trIPI", "tRipi", "tRipI", "tRiPi", "tRiPI", "tRIpi", "tRIpI", "tRIPi", "tRIPI", "Tripi", "TripI", "TriPi", "TriPI", "TrIpi", "TrIpI", "TrIPi", "TrIPI", "TRipi", "TRipI", "TRiPi", "TRiPI", "TRIpi", "TRIpI", "TRIPi", "TRIPI", "fodi", "fodI", "foDi", "foDI", "fOdi", "fOdI", "fODi", "fODI", "Fodi", "FodI", "FoDi", "FoDI", "FOdi", "FOdI", "FODi", "FODI", "mazi", "mazI", "maZi", "maZI", "mAzi", "mAzI", "mAZi", "mAZI", "Mazi", "MazI", "MaZi", "MaZI", "MAzi", "MAzI", "MAZi", "MAZI"]
// KEYS4, KEYS64, KEYS96

function toBase128(n) {
    var out = [];
    while (n > 0) {
        out.push(n%128);
        n = Math.floor(n/128);
    }
    return out.reverse().join('-');
} // nincs 128 szimbolum, ezert egy - kuloniti el a karaktereket
function fromBase128(n) {
    n = n.trim().split('-');
    return Number(n[0]*128) + Number(n[1]);
}

function fullFromBase128(n) { // ez valamiért rossz volt
    var out = 0;
    n = n.split('-').reverse();
    for (i=0;i<n.length;i++) {
        out += Number(n[i])*(128**i);
    }
    return out;
}