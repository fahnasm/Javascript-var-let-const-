//Js adalah funtion scope
//Sehingga dalam model var dibawah, index i masih bisa diakses
// for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// console.log(i);


// Apabila diubah menjadi bentuk funtion
// Baru terjadi error
// function tes () {
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
// tes ();
// console.log(i);

// Atau dalam bentuk SIAF
// Self Invoking Anonymous Function
// (function(){
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }());

// console.log(i);



// Cara mudahnya, mengganti var menjadi let
// for (let i = 0; i < 10; i++) {
//             console.log(i);
// }
// console.log(i);


// Ketika suatu variabel yakin tidak akan diubah lagi, gunakan const
const i =  10;
// jika i diubah maka akan error
i =  15; 