// SOAL 2
// Menambahkan event button untuk mengubah warna div
const btnWarna = document.getElementById("btnWarna");
const box = document.getElementById("box");

btnWarna.addEventListener("click", function () {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
});

// SOAL 3
// Menambahkan elemen dan atribut menggunakan JavaScript
const btnTambah = document.getElementById("btnTambah");
const container = document.getElementById("container");

btnTambah.addEventListener("click", function () {
    const p = document.createElement("p");
    p.textContent = "Elemen ini ditambahkan menggunakan JavaScript";
    p.setAttribute("class", "paragraf-baru");
    container.appendChild(p);
});

// SOAL 4
// Function hitung 
function hitung(operasi, a, b) {
    let hasil;

    switch (operasi) {
        case "+":
            hasil = a + b;
            break;
        case "-":
            hasil = a - b;
            break;
        case "*":
            hasil = a * b;
            break;
        case "/":
            hasil = b !== 0 ? a / b : "Tidak bisa dibagi 0";
            break;
        default:
            hasil = "Operasi tidak valid";
    }

    return hasil;
}

function prosesHitung() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const operasi = document.getElementById("operasi").value;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("hasil").textContent = "Input tidak valid";
        return;
    }

    const hasil = hitung(operasi, a, b);
    document.getElementById("hasil").textContent = hasil;
}