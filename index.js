const readline = require("readline-sync");

const angkaPertama = parseFloat(readline.question("Masukkan Angka Pertama :"));
const operator= readline.question("Masukkan Operator (+, - , * , /) : ");
const angkaKedua = parseFloat(readline.question("Masukkan Angka Kedua :"));

//validasi inputan
if (isNaN(angkaPertama) || isNaN(angkaKedua)){
    //maka tampilan error
    return console.log("Inputan tidak sesuai !!!")
} else {
    //lanjutkan eksekusi kode
    const hasil = execute(angkaPertama,angkaKedua, operator);
    console.log(`Hasilnya adalah ${hasil}`);
}

function execute(angkaPertama,angkaKedua,operator)
{

    switch (operator) {
        case "+":
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            // validasi angkaKedua
            if (angkaKedua === 0) {
                return console.log("Error: Tidak bisa dibagi dengan nol");
            }
            return angkaPertama / angkaKedua;
        case "%":
            return angkaPertama % angkaKedua;
        default:
            console.log("operator tidak valid");
    }
}