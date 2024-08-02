// FETCH
// const searchButton = document.querySelector('.movie-search-button');
// searchButton.addEventListener('click', function () {
// 	const inputKeyword = document.querySelector('.movie-search');
// 	fetch('http://www.omdbapi.com/?apikey=4e3e68ce&s=' + inputKeyword.value)
// 		.then((response) => response.json())
// 		.then((response) => {
// 			const movies = response.Search;
// 			let cards = '';
// 			movies.forEach((mov) => (cards += showCards(mov)));
// 			const moviesContainer = document.querySelector('.movie-container');
// 			moviesContainer.innerHTML = cards;

// 			// button detail click
// 			const modalDetailButton = document.querySelectorAll(
// 				'.modal-detail-button'
// 			);
// create looping for all detail button
// modalDetailButton.forEach((btnDetail) => {
// 	btnDetail.addEventListener('click', function () {
// 		const imdbid = this.dataset.imdbid;
// 		fetch('http://www.omdbapi.com/?apikey=4e3e68ce&i=' + imdbid)
// 			.then((response) => response.json())
// 			.then((mov) => {
// 				const movieDetail = showModals(mov);
// 				const modalBody = document.querySelector('.modal-body');
// 				modalBody.innerHTML = movieDetail;
// 			});
// 	});
// });
// 		});
// });

const inputField = document.querySelector('.movie-search');
const moviesContainer = document.querySelector('.movie-container');

inputField.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		searchMovies();
	}
	const inputKeyword = document.querySelector('.movie-search');
	fetch('http://www.omdbapi.com/?apikey=4e3e68ce&s=' + inputKeyword.value)
		.then((response) => response.json())
		.then((response) => {
			const movies = response.Search;
			if (movies) {
				let cards = '';
				movies.forEach((mov) => {
					cards += showCards(mov);
				});
				const moviesContainer = document.querySelector('.movie-container');
				moviesContainer.innerHTML = cards;
			} else {
				// Handle the case where no results were found
				const moviesContainer = document.querySelector('.movie-container');
				moviesContainer.innerHTML = `<p class="text-center">No results found.</p>`;
			}
			// button detail click
			const modalDetailButton = document.querySelectorAll(
				'.modal-detail-button'
			);
			// create looping for all detail button
			modalDetailButton.forEach((btnDetail) => {
				btnDetail.addEventListener('click', function () {
					const imdbid = this.dataset.imdbid;
					fetch('http://www.omdbapi.com/?apikey=4e3e68ce&i=' + imdbid)
						.then((response) => response.json())
						.then((mov) => {
							const movieDetail = showModals(mov);
							const modalBody = document.querySelector('.modal-body');
							modalBody.innerHTML = movieDetail;
						});
				});
			});
		});
});

function searchMovies() {
	if (inputField.value.trim() === '') {
		moviesContainer.innerHTML = '';
	} else {
		console.log('Searching for movies...');
	}

	const inputKeyword = document.querySelector('.movie-search');
	fetch('http://www.omdbapi.com/?apikey=4e3e68ce&s=' + inputKeyword.value)
		.then((response) => response.json())
		.then((response) => {
			const movies = response.Search;
			let cards = '';
			movies.forEach((mov) => {
				cards += showCards(mov);
			});
			const moviesContainer = document.querySelector('.movie-container');
			moviesContainer.innerHTML = cards;
		});
}

function showCards(mov) {
	return `<div class="col-md-4 my-3">
          <div class="card">
            <img src="${mov.Poster}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${mov.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${mov.Year}</h6>
              <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${mov.imdbID}">Show Details</a>
            </div>
          </div>
        </div>`;
}

function showModals(mov) {
	return `<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src="${mov.Poster}" class="img-fluid" />
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item"><h4>${mov.Title} (${mov.Year})</h4></li>
                <li class="list-group-item"><strong>Director</strong>: ${mov.Director}</li>
                <li class="list-group-item"><strong>Actors</strong>: ${mov.Actors}</li>
                <li class="list-group-item"><strong>Plot</strong>: ${mov.Plot}</li>
              </ul>
            </div>
          </div>
        </div>`;
}
