//**************** component for rendring movie list ***********************

Vue.component("movie", {
  props: ["list"],
  template: `
    <div>
    <div class="row row-cols-1 row-cols-md-3" >
    <div class="col mb-4" v-for="items in list.results">
        <div class="card h-100" >
               <img :src=items.poster_path class="card-img-top" alt="movie poster">
           <div class="card-body">
               <h5 class="card-title">{{items.title}}</h5>
               <p class="card-text">Release Date : {{items.release_date}}</p>
               <p><span class="material-icons">
                   star
                   </span>{{items.vote_average}}</p>
            </div>
        </div>
    </div>
   </div>
   </div>
    `,
});

var app = new Vue({
  el: "#myapp",

  data: {
    movielist: [],
  },
  methods: {
    top_rated_movies() {
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=809719fcd198c50139f735e06f657074&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((data) => {
          this.movielist = data;
        });
    },
    up_coming_movies() {
      fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=809719fcd198c50139f735e06f657074&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((data) => {
          this.movielist = data;
        });
    },
  },
});
