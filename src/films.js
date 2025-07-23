// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(film => film.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter (film => film.director === director);
  return result;
 }

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let films = getMoviesFromDirector(array, director);
  if (films.length === 0) 
    return 0;
  let totalScore = films.reduce ((sum, film) => sum + film.score , 0);
  let average = totalScore / films.length;
  return parseFloat(average.toFixed(2)); // redondeig del número en 2 decimals
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  return array
  .slice() //es crea una copia per no modificar l'original
  .sort((filmA, filmB) => filmA.title.localeCompare(filmB.title)) // ordenemt alfabèticament le spelis
  .slice(0, 20)
  .map(film => film.title); // mostra només els títols de les 20 priemres pelis
}

// Exercise 5: Order by year, ascending
function orderByYear() {
  return array 
      .slice()
      .sort((filmA, filmB) => {
        if (filmA.year === filmB.year) {
          return filmA.title.localeCompare(filmB.title); // si dues pelis són del mateix any, sordena alfabéticament
        } else {
          return filmA.year - filmB-year; // si no, ordena per any
        }
        })
      .map(film => film.title); 
  }

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
