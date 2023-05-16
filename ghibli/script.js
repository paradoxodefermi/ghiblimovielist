new Vue({
  el: '#app',
  data: {
    films: [],
    selectedFilm: null
  },
  created() {
    this.fetchFilms();
  },
  methods: {
    fetchFilms() {
      axios.get('https://studio-ghibli-films-api.herokuapp.com/api/')
        .then(response => {
          this.films = Object.entries(response.data).map(([key, value]) => ({
            id: key,
            poster: value.poster,
            title: value.title,
            release_date: value.release,
            producer: value.producers[0],
            score: value.rating,
            running_time: value.runtimeMinutes,
            synopsis: value.synopsis
          }));
        })
        .catch(error => {
          console.log(error);
        });
    },
    showFilmDetails(film) {
      this.selectedFilm = film;
    },
    closeMovieDetails() {
      this.selectedFilm = null;
    }
  }
});
