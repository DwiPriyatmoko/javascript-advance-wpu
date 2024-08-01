// EXECUTION CONTEXT, HOISTING, SCOPE
// var nama = 'origin';
// console.log(nama);

// var nama = 'origin';
// var umur = 35;
// console.log(sayHello());

// function sayHello() {
// 	return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang didalamnya terdapat creation dan execution phase
// Execution Context akses ke window
// Execution Context akses ke argument
// Execution Context akses ke hoisting

// var nama = 'origin';
// var username = '@origintypes';

// function cetakURL(username) {
// 	var instagramURL = 'https://instagram.com/';
// 	return instagramURL + username;
// }

// console.log(cetakURL('simanuk'));

// function a() {
// 	console.log('a');
// 	function b() {
// 		console.log('b');

// 		function c() {
// 			console.log('c');
// 		}
// 		c();
// 	}
// 	b();
// }

// a();

// function satu() {
// 	var nama = 'origin';
// 	console.log(nama);
// }

// function dua() {
// 	console.log(nama);
// }

// console.log(nama);
// var nama = 'types';
// satu();
// dua('keyboard');
// console.log(nama);
