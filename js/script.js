const kelilingTab = document.getElementById("kelilingTab");
const luasTab = document.getElementById("luasTab");
const kelilingSection = document.getElementById("kelilingSection");
const luasSection = document.getElementById("luasSection");
const calculateKeliling = document.getElementById("calculatekeliling");
const calculateLuas = document.getElementById("calculateluas");
const resultElement = document.getElementById("result");
const resetButton = document.getElementById("resetButton");
const rumusKeliling = document.getElementById("rumuskeliling")
const rumusLuas = document.getElementById("rumusluas")

// Toggle antara tab keliling dan tab luas
kelilingTab.addEventListener("click", function() {
    toggleTab("keliling");
});

luasTab.addEventListener("click", function() {
    toggleTab("luas");
});

function toggleTab(type) {
    if (type === "keliling") {
        kelilingTab.style.backgroundColor = "#5e31e4";
        luasTab.style.backgroundColor = "#967ce6";
        kelilingSection.style.display = "block";
        luasSection.style.display = "none";
        calculateKeliling.style.display = "block";
        calculateLuas.style.display = "none",
        resultElement.textContent = "";
        rumusKeliling.style.display = "flex";
        rumusLuas.style.display = "none";
    } else if (type === "luas") {
        kelilingTab.style.backgroundColor = "#967ce6";
        luasTab.style.backgroundColor = "#5e31e4";
        kelilingSection.style.display = "none";
        luasSection.style.display = "block";
        calculateKeliling.style.display = "none";
        calculateLuas.style.display = "block";
        resultElement.textContent = "";
        rumusKeliling.style.display = "none"
        rumusLuas.style.display = "flex"
    }
}

// menghitung keliling
document.addEventListener("DOMContentLoaded", function() {
    toggleTab("keliling");

    calculateKeliling.addEventListener("click", function(event) {
        event.preventDefault(); // Menghentikan aksi default
        const s1 = parseFloat(document.getElementById("s1").value);
        const s2 = parseFloat(document.getElementById("s2").value);
        const s3 = parseFloat(document.getElementById("s3").value);

        if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
            resultElement.textContent = "masukan panjang sisi yang valid.";
        } else {
            const keliling = s1 + s2 + s3;
            resultElement.textContent = "keliling segitiga: " + keliling.toFixed(2);
        }
    });
});

// menghitung luas
calculateLuas.addEventListener("click", function(event) {
    event.preventDefault(); // Menghentikan aksi default
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    if (isNaN(alas) || isNaN(tinggi)) {
        resultElement.textContent = "masukan panjang alas dan tinggi yang valid.";
    } else {
        const luas = 0.5 * alas * tinggi;
        resultElement.textContent = "luas segitiga: " + luas.toFixed(2);
    }
});

// tombol reset
resetButton.addEventListener("click", function() {
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    resultElement.textContent = "";
});
