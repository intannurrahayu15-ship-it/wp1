function hitung(op) {
    let a = document.getElementById("angka1").value;
    let b = document.getElementById("angka2").value;

    a = Number(a);
    b = Number(b);

    let hasil = 0;

    if (isNaN(a) || isNaN(b)) {
        alert("Masukkan angka dulu!");
        return;
    }

    if (op === '+') hasil = a + b;
    if (op === '-') hasil = a - b;
    if (op === '*') hasil = a * b;
    if (op === '/') hasil = a / b;

    document.getElementById("hasil").innerHTML +=
        `<p>${a} ${op} ${b} = ${hasil}</p>`;
}

function hapusHistory() {
    document.getElementById("hasil").innerHTML = "";
}

function hapusInput() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
}
