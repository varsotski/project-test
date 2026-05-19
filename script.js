const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?: ");
alert(`Ого! Вы посмотрели ${numberOfFilms} фильмов`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const LastWatchedFilm = prompt("Какой последний фильм вы посмотрели?: "),
  EstimationOfLastFilm = +prompt("Введите оценку этого фильма от 0 до 10: "),
  LastWatchedFilm2 = prompt("Какой последний фильм вы посмотрели?: "),
  EstimationOfLastFilm2 = +prompt("Введите оценку этого фильма от 0 до 10: ");
personalMovieDB.movies[LastWatchedFilm] = EstimationOfLastFilm;
personalMovieDB.movies[LastWatchedFilm2] = EstimationOfLastFilm2;
console.log(personalMovieDB);
