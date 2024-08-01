$('.movie-search-button').on('click', function () {
	$.ajax({
		url:
			'http://www.omdbapi.com/?apikey=4e3e68ce&s=' + $('.movie-search').val(),
		success: (results) => {
			const movies = results.Search;
			let cards = '';
			movies.forEach((mov) => {
				cards += showCards(mov);
			});
			$('.movie-conatiner').html(cards);
			$('.modal-detail-button').on('click', function () {
				$.ajax({
					url:
						'http://www.omdbapi.com/?apikey=4e3e68ce&i=' +
						$(this).data('imdbid'),
					success: (mov) => {
						const movieDetail = showModals(mov);

						$('.modal-body').html(movieDetail);
					},
					error: (err) => {
						console.log(err.responseText);
					},
				});
			});
		},
		error: (err) => {
			console.log(err.responseText);
		},
	});
});

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
