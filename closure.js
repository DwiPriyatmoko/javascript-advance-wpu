// function init() {
// 	// let nama = 'origin';
// 	return function (nama) {
// 		console.log(nama);
// 	};
// }

// let panggilNama = init();
// panggilNama('geulis');
// panggilNama('bandung');

// function ucapkanSalam(waktu) {
// 	return function (nama) {
// 		console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
// 	};
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('sianag');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('geulis');

let add = (function () {
	let counter = 0;
	return function () {
		return ++counter;
	};
	// immediately invoked function expression
})();

counter = 10;

console.log(add());
console.log(add());
console.log(add());
