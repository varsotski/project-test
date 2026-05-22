const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?: ");
alert(`Ого! Вы посмотрели ${numberOfFilms} фильмов`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const LastWatchedFilm = prompt("Какой последний фильм вы посмотрели?: "),
    EstimationOfLastFilm = +prompt("Введите оценку этого фильма от 0 до 10: ");
  if (
    LastWatchedFilm != null &&
    EstimationOfLastFilm !== null &&
    LastWatchedFilm != "" &&
    EstimationOfLastFilm !== "" &&
    LastWatchedFilm.length < 50
  ) {
    personalMovieDB.movies[LastWatchedFilm] = EstimationOfLastFilm;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
