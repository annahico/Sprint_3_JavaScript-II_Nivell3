// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the movies of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter ((movie) => movie.director === director);
  return result;
 }

// Exercise 3: Calculate the average of the movies of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = getMoviesFromDirector(array, director);
  if (movies.length === 0) 
    return 0;
  let totalScore = movies.reduce ((sum, movie) => sum + movie.score , 0);
  let average = totalScore / movies.length;
  return parseFloat(average.toFixed(2)); // redondeig del número en 2 decimals
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  return array
  .slice() //es crea una copia per no modificar l'original
  .sort((movieA, movieB) => movieA.title.localeCompare(movieB.title)) // ordenemt alfabèticament le spelis
  .slice(0, 20)
  .map(movie => movie.title); // mostra només els títols de les 20 priemres pelis
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedByYear = array.slice().sort((a, b) => a.year - b.year || 
  a.title.localeCompare(b.title)); // s'ordena primer per any, si són iguals, s'ordena alfabèticament per títol
  return sortedByYear; // retorna l'array ordenat
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesByGenre =array.filter((movie) => movie.genre.includes(genre));
  const totalScore = moviesByGenre.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);
  let averageScore = totalScore / moviesByGenre.length;
  const result = +averageScore.toFixed(2);
  return result
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(movie => {
    let duration = movie.duration;
    let totalMinutes = 0;
    
    if (duration.includes('h')) {
      const parts = duration.split('h');
      totalMinutes += parseInt(parts[0]) * 60; // Converteix les hores a minuts
      duration = parts[1].trim(); // treu l'apartat de hores
    }
    
    if (duration.includes('min')) {
      totalMinutes += parseInt(duration.split('min')[0]); // afegeix els minuts
    }
    
    return {
      ...movie,
      duration: totalMinutes
    };
  });
}

// Exercise 8: Get the best movie of a year
function bestmovieOfYear() {
  
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
    bestmovieOfYear,
  };
}
