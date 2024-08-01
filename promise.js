// $.ajax({
// 	url: 'https://www.omdbapi.com/?apikey=4a3b711b&t=avengers',
// 	success: (movies) => {
// 		console.log(movies);
// 	},
// });

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {
// 	if (xhr.readyState === 4) {
// 		if (xhr.status === 200) {
// 			console.log(JSON.parse(xhr.responseText));
// 		} else {
// 			console.log(xhr.responseText);
// 		}
// 	}
// };

// xhr.open('GET', 'https://www.omdbapi.com/?apikey=4a3b711b&t=avengers');
// xhr.send();

// fetch('https://www.omdbapi.com/?apikey=4a3b711b&t=avengers')
// 	.then((response) => response.json())
// 	.then((response) => console.log(response));

// PROMISE ==
// object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang
// Promise memiliki 3 state
// pending, fulfilled, rejected
// Promise memiliki method .then() dan .catch()
// callback (resolve, reject, finally)
// aksi (then / catch)

// EXAMPLE 1
// let fulfilled = false;
// const promise1 = new Promise((resolve, reject) => {
// 	fulfilled ? resolve('is fulfilled') : reject('is rejected');
// });

// promise1
// 	.then((response) => console.log(`OK! : ${response}`))
// 	.catch((response) => console.log(`Not OK! : ${response}`));

// EXAMPLE 2
// let fulfilled = false;
// const promise2 = new Promise((resolve, reject) => {
// 	fulfilled
// 		? setTimeout(() => resolve('is fulfilled and waiting'), 2000)
// 		: setTimeout(() => reject('is rejected and waiting'), 2000);
// });

// console.log('mulai');
// 	.finally(() => console.log('finally done!'))
// 	.then((response) => console.log(`OK! : ${response}`))
// 	.catch((response) => console.log(`Not OK! : ${response}`));
// console.log('selesai');

// EXAMPLE 3 (Promise.all())
const film = new Promise((resolve) => {
	setTimeout(() => {
		resolve([
			{
				film: 'Batman die',
				genre: 'Action',
				year: '2022',
			},
		]);
	}, 3000);
});

const traffic = new Promise((resolve) => {
	setTimeout(() => {
		resolve([
			{
				road: 'High Traffic',
				city: 'Bandung',
				year: '2022',
			},
		]);
	}, 500);
});

Promise.all([film, traffic])
	// .then((response) => console.log(response));
	.then((response) => {
		const [film, traffic] = response;
		console.log(film);
		console.log(traffic);
	})
	.catch((response) => console.log(`Not OK! : ${response}`));
