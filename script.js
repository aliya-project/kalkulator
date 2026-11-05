// Fungsi Penjumlahan
function tambah() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);

    let total = a + b;

    document.getElementById("hasil").innerText = total;
}


// Fungsi Pengurangan
function kurang() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);

    let total = a - b;

    document.getElementById("hasil").innerText = total;
}


// Fungsi Perkalian
function kali() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);

    let total = a * b;

    document.getElementById("hasil").innerText = total;
}


// Fungsi Pembagian
function bagi() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);

    if (b === 0) {
        document.getElementById("hasil").innerText =
            "Tidak bisa dibagi 0!";
    } else {
        let total = a / b;

        document.getElementById("hasil").innerText = total;
    }

// Fungsi Penjumlahan
function tambah() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);

    let total = a + b;

    document.getElementById("hasil").innerText = total;
}

function hapusHasil() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").innerText = "-";
}


// Fungsi Pengurangan
function kurang() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);

    let total = a - b;

    document.getElementById("hasil").innerText = total;
}


// Fungsi Perkalian
function kali() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);

    let total = a * b;

    document.getElementById("hasil").innerText = total;
}


// Fungsi Pembagian
function bagi() {
    let a = Number(document.getElementById("angka1").value);
    let b = Number(document.getElementById("angka2").value);

    if (b === 0) {
        document.getElementById("hasil").innerText =
            "Tidak bisa dibagi 0!";
    } else {
        let total = a / b;

        document.getElementById("hasil").innerText = total;
    }
}}