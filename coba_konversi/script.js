let currentTab = "panjang";
let riwayat = [];

const satuan = {
    panjang: ["cm", "meter", "km"],
    massa: ["gram", "kg", "ton"],
    suhu: ["celsius", "fahrenheit", "kelvin"],
    volume: ["ml", "liter"],
    luas: ["cm2", "m2", "hektar"]
};

const faktor = {
    panjang: {
        cm: 0.00001,     
        meter: 0.001,    
        km: 1
    },
    massa: {
        gram: 0.000001,  
        kg: 0.001,       
        ton: 1
    },
    volume: {
        ml: 0.001,       
        liter: 1
    },
    luas: {
        cm2: 0.00000001, 
        m2: 0.0001,      
        hektar: 1
    }
};

function setTab(tab, btn) {
    currentTab = tab;

    document.querySelectorAll(".menu-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const dari = document.getElementById("dari");
    const ke = document.getElementById("ke");
    dari.innerHTML = "";
    ke.innerHTML = "";

    satuan[tab].forEach(s => {
        dari.innerHTML += `<option value="${s}">${s}</option>`;
        ke.innerHTML += `<option value="${s}">${s}</option>`;
    });

    document.getElementById("hasil").innerText = "-";
}

setTab("panjang", document.querySelector(".menu-btn"));

function konversi() {
    const nilai = parseFloat(document.getElementById("nilai").value);
    const dari = document.getElementById("dari").value;
    const ke = document.getElementById("ke").value;

    if (isNaN(nilai)) {
        alert("Masukkan nilai yang valid");
        return;
    }

    let hasil = 0;

    if (currentTab === "suhu") {
        if (dari === ke) hasil = nilai;
        else if (dari === "celsius" && ke === "fahrenheit")
            hasil = (nilai * 9/5) + 32;
        else if (dari === "fahrenheit" && ke === "celsius")
            hasil = (nilai - 32) * 5/9;
        else if (dari === "celsius" && ke === "kelvin")
            hasil = nilai + 273.15;
        else if (dari === "kelvin" && ke === "celsius")
            hasil = nilai - 273.15;
        else if (dari === "fahrenheit" && ke === "kelvin")
            hasil = (nilai - 32) * 5/9 + 273.15;
        else if (dari === "kelvin" && ke === "fahrenheit")
            hasil = (nilai - 273.15) * 9/5 + 32;
    }
 
    else {
        hasil = nilai * (faktor[currentTab][dari] / faktor[currentTab][ke]);
    }

    hasil = Number(hasil.toFixed(6));

    document.getElementById("hasil").innerText = hasil;

    riwayat.unshift(`${nilai} ${dari} → ${hasil} ${ke}`);
    if (riwayat.length > 20) riwayat.pop();

    tampilkanRiwayat();
}

function tampilkanRiwayat() {
    const list = document.getElementById("listRiwayat");
    list.innerHTML = "";

    riwayat.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function clearRiwayat() {
    riwayat = [];
    tampilkanRiwayat();
}
